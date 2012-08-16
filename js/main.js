/**
* Backbone.js/RequireJS Template
*
* @info		Initialises the app
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @require	jQuery 1.8.0
			underscore 1.3.3
			backbone.js 0.92
			requireJS 2.02
* @license	MIT
**/

/* Configure shortcut aliases for required libraries */
require.config({
	paths: {
		// paths to libraries
		jQuery: 'libs/jquery/jquery-1.8.0.min',
		Underscore: 'libs/underscore/underscore.min',
		Backbone: 'libs/backbone/backbone.min',
		text: 'libs/require/text' // text plugin for templates
	},
	shim: {
		// set dependencies for imported scipts
		'jQuery': {
			exports: '$'
		},
		'Underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: ['Underscore', 'jQuery'],
			exports: 'Backbone'
		}
	}
});

require([
	// load the app module (app.js) and pass it to the definition function
	'app' // App
], function(App) {
	// the "app" dependency is passed in as "App"

	// initialze the application view
	App.initialize();
});