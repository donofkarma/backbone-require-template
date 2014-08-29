/**
* Backbone.js/RequireJS Template
*
* @info     Main App view module template
* @version  0.4
* @author   Jasal Vadgama - http://blacklabelcreative.com/
* @license  MIT
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
                'click a[href^="/"]:not([data-bypass])': 'clickHandler'
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
            },

            // events
            clickHandler: function(e) {
                // All navigation that is relative should be passed through the navigate
                // method, to be processed by the router. If the link has a 'data-bypass'
                // attribute, bypass the delegation completely.

                var
                    // Get the absolute anchor href
                    href = { prop: jQuery(e.currentTarget).prop('href'), attr: jQuery(e.currentTarget).attr('href') },
                    // Get the absolute root
                    root = location.protocol + '//' + location.host + App.root
                ;

                // Ensure the root is part of the anchor href, meaning it's relative.
                if (href.prop.slice(0, root.length) === root) {
                    // Stop the default event to ensure the link will not cause a page refresh.
                    e.preventDefault();

                    // 'Backbone.history.navigate' is sufficient for all Routers and will
                    // trigger the correct events. The Router's internal 'navigate' method
                    // calls this anyways.  The fragment is sliced from the root.
                    Backbone.history.navigate(href.attr, true);
                }
            }
        });

    // what we return here will be used by other modules
    return AppView;
});