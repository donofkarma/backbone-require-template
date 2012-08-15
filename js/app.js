/**
* Backbone.js/Require.js Template
*
* @info		App initialization module
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery
	'Underscore', // libs/underscore/underscore
	'Backbone', // libs/backbone/backbone

	// additional module dependencies
	'views/app-view' // AppView
], function($, _, Backbone, AppView) {
	// what we return here will be used by other modules
	return {
		initialize: function() {
			var App;

			// init the main app view
			App = new AppView();
		}
	};
});