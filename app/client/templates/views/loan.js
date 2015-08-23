/**
Template Controllers

@module Templates
**/


/**
When the loan tracker template is created

@class [template] views_loan
@method (created)
**/

Template['views_loan'].created = function(){
    // Set page title suffix
	Meta.setSuffix(TAPi18n.__("dapp.views.tracker.title"));
};


/**
When the loan tracker template is created

@class [template] views_loan
@method (created)
**/

Template['views_loan'].rendered = function(){
    var lid = this.data.id;
    var template = this;
    
    // Load loan data and set data as reactive var
    Loans.load(lid, 1, function(err, loan){
        TemplateVar.set(template, 'loan', loan);
    });
    
    // Set loan state to default
    TemplateVar.set('loanState', {isOpen: true});
};


/**
These are the loan tracker event handlers, that handle payotus, refund and contributions to WeiLend crowdlending campaigns.

@class [template] views_loan
@var (events)
**/

Template['views_loan'].events({
    /**
    On Donate Click

    @event (click #donate)
    **/
	
	'click #donate': function(event, template){
        var loan = TemplateVar.get('loan');
        var amount = web3.toWei($('#amount').val(), 'ether');
        
        console.log(amount);
        
        if(_.isEmpty(amount) || _.isUndefined(amount) || !loan)
            return;
        
        TemplateVar.set(template, 'loanState', {isContributing: true});
        WeiLend.contribute(loan.id, web3.eth.accounts[0], {value: amount}, function(err, result, contributed){
            if(err) {
                TemplateVar.set(template, 'loanState', {isError: true, isContributing: true, error: err});
                return;
            }
            
            if(!contributed)
                return;
            
            TemplateVar.set(template, 'loanState', {isContributing: true, contributed: true});
            Loans.load(loan.id, 1, function(err, loan){
                TemplateVar.set(template, 'loan', loan);
            });
        });
	},
	
	/**
    On Payout Click

    @event (click #payout)
    **/
	
	'click #payout': function(event, template){
        var loan = TemplateVar.get('loan');
        if(!loan)
            return;
        
        TemplateVar.set(template, 'loanState', {isPaying: true});
        WeiLend.payout(loan.id, function(err, result, payedout){
            if(err) {
                TemplateVar.set(template, 'loanState', {isPaying: true, isError: true, error: err, payout: false});   
                return;
            }
            
            if(!payedout)
                return;
            
            TemplateVar.set(template, 'loanState', {isPaying: true, payout: true});
            Loans.load(loan.id, 1, function(err, loan){
                TemplateVar.set(template, 'loan', loan);
            });
        });
	},
	
	/**
    On Refund

    @event (click #refund)
    **/
	
	'click #refund': function(event, template){
        var loan = TemplateVar.get('loan');
        if(!loan)
            return;
        
        TemplateVar.set(template, 'loanState', {isRefund: true});
        WeiLend.refund(loan.id, function(err, result, refunded){
            if(err){
                TemplateVar.set(template, 'loanState', {isRefund: true, isError: true, error: err});
            }
            
            if(!refunded)
                return;
            
            TemplateVar.set(template, 'loanState', {isRefund: true, refunded: true});
            Loans.load(loan.id, 1, function(err, loan){
                TemplateVar.set(template, 'loan', loan);
            });
        });
	},

    /**
    On payInstallment

    @event (click #payInstallment)
    **/
    
    'click #payInstallment': function(event, template){
        var loan = TemplateVar.get('loan');
        if(!loan)
            return;
        
        TemplateVar.set(template, 'loanState', {isPayingInstallment: true});
        WeiLend.payInstallment(loan.id, function(err, result, paidInstallment){
            if(err){
                TemplateVar.set(template, 'loanState', {isPayingInstallment: true, isError: true, error: err});
            }
            
            if(!paidInstallment)
                return;
            
            TemplateVar.set(template, 'loanState', {isPayingInstallment: true, paidInstallment: true});
            Loans.load(loan.id, 1, function(err, loan){
                TemplateVar.set(template, 'loan', loan);
            });
        });
    },
});


/**
These are helper functions for the loan tracker

@class [template] views_loan
@var (helpers)
**/

Template['views_loan'].helpers({	
	/**
    Get the most recent loans

    @method (recent)
    **/
	
	'recent': function(){ 
        Loans.load(false, 2, 0);
		return Loans.find({}, {limit: 2});
	},
});