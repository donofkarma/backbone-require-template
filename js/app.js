/**
* Backbone.js/RequireJS Template
*
* @info		App initialization module
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery

	// additional module dependencies
	'views/app-view' // AppView
], function($, AppView) {
	// set up the interactions for the app seprerate from backbone

	// PRIVATE VARIABLES

	// PRIVATE FUNCTIONS

	// PUBLIC FUNCTIONS
	// what we return here will be used by other modules
	return {
		initialize: function() {
			// main app init
			var App;

			// init the main app view
			App = new AppView();

			console.log('App running...');
		}
	};
});