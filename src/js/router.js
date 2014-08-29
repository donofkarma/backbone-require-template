/**
* Backbone.js/RequireJS Template
*
* @info     Router module
* @version  0.4
* @author   Jasal Vadgama - http://blacklabelcreative.com/
* @license  MIT
**/

define([
    // add global app dependency
    'app', // App

    // additional module dependencies
    'views/app-view' // AppView
], function(App, AppView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // define the URL routes (examples of each type)
            '': 'index', // http://example.com/
            'posts/:id': 'getPost', // http://example.com/#/posts/121
            'download/*path': 'downloadFile', // http://example.com/#/download/user/images/hey.gif
            ':route/:action': 'loadView' // http://example.com/#/dashboard/graph
        },

        index: function() {
            // init the main app view
            var home = new AppView();
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
        }
    });

    // what we return here will be used by other modules
    return AppRouter;
});