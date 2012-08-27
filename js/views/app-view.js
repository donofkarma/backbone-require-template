/**
* Backbone.js/RequireJS Template
*
* @info		Main App view module template
* @version	0.3
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'jQuery', // libs/jquery/jquery
	'Underscore', // libs/underscore/underscore
	'Backbone', // libs/backbone/backbone

	// additional module dependencies
	'views/view', // View

	// module templates
	'text!../../templates/view/main.html' // Template
], function($, _, Backbone, View, MainTemplate) {
	var AppView = Backbone.View.extend({
			// set the taget element for the view
			el: $('#app'),

			// bind any events
			events: {
			},

			// template
			template: MainTemplate,

			// init
			initialize: function() {
				var Views;

				// init a view
				Views = new View();

				this.render();
			},

			// render
			render: function() {
				$el = $(this.el);

				$el.html(_.template( MainTemplate, {} ));
			}
		});

	// what we return here will be used by other modules
	return AppView;
});