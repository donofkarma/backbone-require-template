/**
* Backbone.js/RequireJS Template
*
* @info		App initialization module
* @version	0.2
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery

	// additional module dependencies
	'router', // AppRouter
	'views/app-view' // AppView
], function($, AppRouter, AppView) {
	// set up the interactions for the app seprerate from backbone

	// PRIVATE VARIABLES

	// PRIVATE FUNCTIONS

	// PUBLIC FUNCTIONS
	// what we return here will be used by other modules
	return {
		initialize: function() {
			// main app init
			var Router, App;

			// start the router
			Router = new AppRouter();

			// init the main app view
			App = new AppView();
		}
	};
});