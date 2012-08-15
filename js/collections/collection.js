/**
* Backbone.js/Require.js Template
*
* @info		Collection template
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// these are path alias that we configured in our bootstrap
	'Underscore', // libs/underscore/underscore
	'Backbone' // libs/backbone/backbone

	// additional module dependencies
], function(_, Backbone) {
	var collection = Backbone.Collection.extend({
			// model to use for the collection
			model: model
		});

	// what we return here will be used by other modules
	return new collection();
});