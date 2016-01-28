console.log("a")
require.config({
	paths: {
		JQuery: 'javascript/jquery_wrapper.js',
		Underscore: 'javascript/underscore_wrapper',
		Backbone: 'javascript/backbone_wrapper'
	}
});

require([
	'main',
	'javascript/jquery',
	'javascript/underscore',
	'javascript/backbone'
], function(App){
	App.initialize();
});