/**
* Backbone.js/Require.js Template
*
* @info		Model template
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'Underscore', // libs/underscore/underscore
	'Backbone' // libs/backbone/backbone
], function(_, Backbone) {
	var model = Backbone.Model.extend({
			defaults: function() {
				return {
					title: 'empty model'
				};
			},

			// Ensure that each item created has 'title'
			initialize: function() {
				if (!this.get('title')) {
					this.set({
						title: this.defaults.title
					});
				}
			}
		});

	// what we return here will be used by other modules
	return model;
});