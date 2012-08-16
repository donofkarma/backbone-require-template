/**
* Backbone.js/RequireJS Template
*
* @info		Main App view module
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
	'collections/collection' // Collection
], function($, _, Backbone, Collection) {
	var View = Backbone.View.extend({
			// set the taget element for the view
			el: $('#view'),

			// bind any events
			events: {
			},

			// init
			initialize: function() {
				console.log('view running...');
			},

			// render
			render: function() {
				// nothing to render for this view
				// everything is handled by the child views
			}
		});

	// what we return here will be used by other modules
	return View;
});