/*global module:false*/

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    // RequireJS
                    define: true,
                    require: true,
                    // lodash
                    _: true,
                    // BackboneJS
                    Backbone: true,
                    // jQuery
                    jQuery: true,
                    // extras
                    alert: true,
                    console: true
                }
            },
            all: [
                'Gruntfile.js',
                'src/js/*.js',
                'src/js/collections/**/*.js',
                'src/js/models/**/*.js',
                'src/js/views/**/*.js'
            ]
        },
        /*jasmine: {
            requirejs: {
                src: 'src/js/*.js',
                options: {
                    specs: 'test/*-spec.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'src/js/',
                        }
                    }
                }
            }
        },*/
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js",
                    mainConfigFile: "src/js/main.js",
                    name: 'main',
                    out: "assets/js/script.min.js",
                    preserveLicenseComments: false
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['src/js/libs/require/require.js'],
                        dest: 'assets/js/libs/require/require.js'
                    }
                ]
            }
        },
        sass: {
            dev: {
                files: {
                    'assets/css/style.css': 'src/sass/style.scss',
                    'assets/css/ie.css' : [
                        'src/sass/style_small.scss',
                        'src/sass/style_medium.scss',
                        'src/sass/style_large.scss'
                    ]
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'assets/css/style.min.css': ['assets/css/style.css'],
                    'assets/css/ie.min.css': ['assets/css/ie.css']
                }
            }
        },
        watch: {
            sass: {
                files: ['src/scss/*.scss'],
                tasks: 'sass'
            },
            lint: {
                files: '<%= jshint.all %>',
                tasks: 'jshint'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('deploy', ['sass', 'cssmin', 'requirejs', 'copy']);
    grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'requirejs', 'copy']);
};