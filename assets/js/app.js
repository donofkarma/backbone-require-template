/**
* Backbone.js/RequireJS Template
*
* @info		App initialization module
* @version	0.3
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery
	'lodash', // libs/lodash/lodash.underscore.min
	'Backbone' // libs/backbone/backbone

	// additional module dependencies
], function($, _, Backbone) {
	// set up the interactions for the app seprerate from backbone

	// global app object to hold settings
	var app = {
		root: '/'
	};

	// PRIVATE VARIABLES

	// PRIVATE FUNCTIONS

	// what we return here will be used by other modules
	// app is also extended with Backbone.Events
	return _.extend(app, {
		// GLOBAL FUNCTIONS
	}, Backbone.Events);
});