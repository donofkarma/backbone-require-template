/**
* Backbone.js/RequireJS Template
*
* @info		Router module
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery
	'Underscore', // libs/underscore/underscore
	'Backbone' // libs/backbone/backbone

	// additional module dependencies
], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			// define the URL routes (examples of each type)
			"posts/:id": "getPost", // http://example.com/#/posts/121
			"download/*path": "downloadFile", // http://example.com/#/download/user/images/hey.gif
			":route/:action": "loadView" // http://example.com/#/dashboard/graph
		},

		getPost: function(id) {
			alert(id);
		},

		downloadFile: function(path) {
			alert(path);
		},

		loadView: function(route, action) {
			alert(route + "_" + action);
		},

		initialize: function() {
			Backbone.history.start();
		}
	});

	// what we return here will be used by other modules
	return AppRouter;
});