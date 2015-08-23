/**
Template Controller

@module Templates
*/

/**
The template to allow easy WeiLend contract deployment.

@class [template] components_deploy
@constructor
*/

Template['components_deploy'].created = function(){
    TemplateVar.set('deploy', {isUndeployed: true});
};

Template['components_deploy'].events({
    /**
    Deploy the price feed, used for setup of contract.

    @event (click #weilendDeploy)
    **/

    'click #weilendDeploy': function(event, template){
        WeiLend.deploy(function(err, contract, mined){
            if(err) {
                TemplateVar.set(template, 'deploy', {isError: true, error: err});
                return;   
            }
            
            TemplateVar.set(template, 'deploy', {isMining: true, address: contract.address});
            LocalStore.set('weilendAddress', contract.address);
            Loans.remove({});
            
            if(mined)
                TemplateVar.set(template, 'deploy', {isMined: true, address: contract.address});
        });
    },
});