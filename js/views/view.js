/**
* Backbone.js/Require.js Template
*
* @info		View template
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
	'text!../../templates/collection/template.html' // Template
], function($, _, Backbone, Template) {
	var View = Backbone.View.extend({
			// it's a list item
			tagName: 'li',

			// template for the item
			template: _.template(Template),

			// events for each item
			events: {
			},

			// init
			initialize: function() {
				// re-render the view when the model is updates
				//this.model.on('change', this.render, this);

				// remove a model when it's destroyed in the collection
				//this.model.on('destroy', this.remove, this);
			},

			// render
			render: function() {
				var $el = $(this.el);

				// put the data in the template
				$el.html(this.template(this.model.toJSON()));

				// return to mainitain chainability
				return this;
			},


			// save the item
			save: function() {
				var value = '';

				// see if the value is not empty
				if (value) {
					// save the model
					this.model.save({
						title: value
					});
				}
			},

			// remove an item
			clear: function() {
				this.model.clear();
			}
		});

	// what we return here will be used by other modules
	return View;
});