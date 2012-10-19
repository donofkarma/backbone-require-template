/**
* Backbone.js/RequireJS Template
*
* @info		Main App view module
* @version	0.4
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// add global app dependency
	'../app', // App

	// additional module dependencies
	'collections/collection', // Collection

	// module templates
	'text!../../templates/collection/template.html' // Template
], function(App, Collection, Template) {
	var View = Backbone.View.extend({
			// set the target element for the view
			el: '#view',

			// template for the view - can also be reference directly in render()
			template: Template,

			// bind any events
			events: {
			},

			// init
			initialize: function() {
				// bind a events to collection changes
				Collection.on('all', this.render, this);

				// add an item to the collection
				// replace with a .fetch() for the data
				Collection.add({
					title: '!!! test item 1 !!!'
				});
				Collection.add({
					title: '!!! test item 2 !!!'
				});
				Collection.add({
					title: '!!! test item 3 !!!'
				});
				Collection.add({
					title: '!!! test item 4 !!!'
				});
			},

			// render
			render: function() {
				// apply the template to the models and show on the page
				this.$el.html(_.template( this.template, { models: Collection.models } ));

				// return to maintiain chainability
				return this;
			}
		});

	// what we return here will be used by other modules
	return View;
});