/**
* Backbone.js/Require.js Template
*
* @info		Initialises the app
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @require	jquery 1.7.2
			underscore 1.3.3
			backbone.js 0.92
			require.js 2.02
* @license	MIT
**/

/* Configure shortcut aliases for required libraries */
require.config({
	paths: {
		// paths to libraries
		jQuery: 'libs/jquery/jquery.min',
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