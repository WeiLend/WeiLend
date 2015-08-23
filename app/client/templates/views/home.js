/**
Template Controllers

@module Templates
**/

/**
The view1 template

@class [template] views_view1
@constructor
**/

Template['views_home'].helpers({
    /**
    Get the name

    @method (name)
    **/

    'name': function(){
        return this.name || TAPi18n.__('dapp.views.home.defaultName');
    },
    
    
    /**
    Get most recent loans.

    @method (loans)
    **/

    'loans': function(){
        return Loans.find({}, {limit: 4, sort: {id: -1}});
    }
});

Template['views_home'].created = function(){
	Meta.setSuffix(TAPi18n.__("dapp.views.home.title"));
};
