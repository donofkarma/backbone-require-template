/**
* Backbone.js/RequireJS Template
*
* @info		Main App view module template
* @version	0.3
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// add global app dependency
	'app', // App

	// additional module dependencies
	'views/view', // View

	// module templates
	'text!../../templates/view/main.html' // Template
], function(App, View, MainTemplate) {
	var AppView = Backbone.View.extend({
			// set the taget element for the view
			el: '#app',

			// bind any events
			events: {
			},

			// template
			template: MainTemplate,

			// init
			initialize: function() {
				var Views;

				// render main view
				this.render();

				// init a view
				Views = new View();
			},

			// render
			render: function() {
				this.$el.html(_.template( MainTemplate, {} ));
			}
		});

	// what we return here will be used by other modules
	return AppView;
});