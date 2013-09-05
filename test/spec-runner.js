require.config({
    baseUrl: "../src/js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jQuery: 'libs/jquery/jquery.min',
        lodash: 'libs/lodash/lodash.underscore.min',
        Backbone: 'libs/backbone/backbone.min',
        jasmine: '../../test/libs/jasmine/jasmine',
        'jasmine-html': '../../test/libs/jasmine/jasmine-html',
        spec: '../test/jasmine/spec/'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'lodash': {
            exports: "_"
        },
        'Backbone': {
            deps: ['lodash', 'jQuery'],
            exports: 'Backbone'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
        
    }
});

require(['jQuery', 'lodash', 'jasmine-html'], function($, _, jasmine){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('../../test/spec/model/test-spec');

    $(function(){
        require(specs, function(){
            jasmineEnv.execute();
        });
    });

});