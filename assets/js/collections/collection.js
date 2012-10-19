/**
* Backbone.js/RequireJS Template
*
* @info		Collection template
* @version	0.3
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// add global app dependency
	'app', // App

	// additional module dependencies
	'models/model' // Model
], function(App, Model) {
	var collection = Backbone.Collection.extend({
			// model to use for the collection
			model: Model

			/*
			// custom url for this collection
			url: '/path/to/api'

			// custom sync for this collection - overrides Backbone.sync
			sync: function(method, model, options) {
			}
			*/
		});

	// what we return here will be used by other modules
	return new collection();
});