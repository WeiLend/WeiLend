/**
Template Controllers

@module Templates
**/

/**
The balance template

@class [template] components_startLoan
@constructor
**/

Template['components_startLoan'].created = function(){
    // Set Default Start Loan State
    TemplateVar.set('startLoan', {isNotStarted: true});
};

Template['components_startLoan'].rendered = function(){
	// Create Datepicker
	$('#timelimit_m').datepicker();

	// Form Validation
	$('#startLoanForm').parsley({
		successClass: "has-success",
		errorClass: "has-error",
		classHandler: function (el) {
			return el.$element.closest(".form-group");
		},
		errorsContainer: function (el) {
			return el.$element.closest(".form-group");
		},
		errorsWrapper: "<span class='help-block'></span>",
		errorTemplate: "<span></span>"
	});
};

Template['components_startLoan'].events({
    /**
    Fired when the start button is clicked. This starts the crowdlending campaign.

    @method (click #start)
    **/
    
    'click #start': function(event, template){
        var timelimit_m = moment($('#timelimit_m').val()).unix();  
        var operationName = $('#operationName').val();
        var website = $('#website').val();
        var beneficiary = $('#beneficiary').val();
        var config = $('#config').val();
        var goal = web3.toWei(parseInt($('#goal').val()), 'ether');
        var category = $('#category').val();
        var video = Helpers.parseVideoUrl($('#video').val());
        var interest_rate = parseInt($('#interest_rate').val());
        var grace_period_m = moment($('#grace_period_m').val()).unix();
        var tenor_a = moment($('#tenor_a').val()).unix();

        if(_.isObject(video))
            video = video.type + ' ' + video.id;
        else
            video = '';
        
        $('#startLoanForm').parsley().subscribe(
            'parsley:form:validate', function (formInstance) {
            
            // If the form is valid
            if (formInstance.isValid('block1', true) 
                || formInstance.isValid('block2', true)) {

                WeiLend.newLoan(operationName, website, video, beneficiary, goal, timelimit_m, interest_rate, grace_period_m, category, config, tenor_a, function(err, result, mined){
                    if(err) {
                        TemplateVar.set(template, 'startLoan', {isError: true, error: err});
                        return;
                    }
                    
                    TemplateVar.set(template, 'startLoan', {isMining: true});
                    
                    if(!mined)
                        return;
                    
                    Loans.load(result.toNumber(10), 1, function(err, loan){
                        if(err) {
                            TemplateVar.set(template, 'startLoan', {isError: true, error: err});
                            return;
                        }
                        
                        if(loan.id == result.toNumber(10))
                            TemplateVar.set(template, 'startLoan', {isMined: true, cid: result.toNumber(10)});
                    });
                });
            }
                
            // else stop form submission
            formInstance.submitEvent.preventDefault();
        });
    },
});