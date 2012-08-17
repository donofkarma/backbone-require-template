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
	'collections/collection', // Collection

	// module templates
	'text!../../templates/collection/template.html' // Template
], function($, _, Backbone, Collection, Template) {
	var View = Backbone.View.extend({
			// set the taget element for the view
			el: $('#view'),

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
				var $el = $(this.el);

				// apply the template to the models and show on the page
				$el.html(_.template( this.template, { models: Collection.models } ));

				// return to maintiain chainability
				return this;
			}
		});

	// what we return here will be used by other modules
	return View;
});