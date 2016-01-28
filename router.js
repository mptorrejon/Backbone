define([
	'JQuery',
	'Underscore',
	'Backbone',
	'views/first',
	'views/second'
], function($, _, Backbone, Session, firstView, secondView){
	var appRouter = Backbone.Router.extend({
		routes: {
			'first': 'showFirst',
			'second': 'showSecond',
			'*actions': 'defaultRoute'
		},
		showFirst: function(){
			console.log("show first page");
		},
		showSecond: function(){
			console.log('show second page');
		},
		defaultRoute: function(actions){
			console.log("Default page - index: "+actions);
		}
	});
	var initialize = function(){
		var app_route = new appRoute();
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});