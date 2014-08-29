/*global module:false*/

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            main: {
                files: {
                    'site/assets/css/style.css': 'src/sass/style.scss',
                    'site/assets/css/ie.css' : 'src/sass/ie.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    'site/assets/css/style.css': ['site/assets/css/style.css'],
                    'site/assets/css/ie.css': ['site/assets/css/ie.css']
                }
            }
        },
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
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js",
                    mainConfigFile: "src/js/main.js",
                    name: 'main',
                    out: "site/assets/js/app.js",
                    preserveLicenseComments: false
                }
            }
        },
        copy: {
            require: {
                files: [
                    {
                        src: ['src/js/libs/require/require.js'],
                        dest: 'site/assets/js/libs/require/require.js'
                    }
                ]
            },
            // fonts: {
            //     files: [
            //         {
            //             expand: true,
            //             cwd: 'src/fonts/',
            //             src: ['**'],
            //             dest: 'assets/fonts/'
            //         }
            //     ]
            // },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: 'site/assets/images/'
                    }
                ]
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            script: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'requirejs']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['sass', 'cssmin', 'requirejs', 'copy']);
    grunt.registerTask('default', ['test', 'build']);
};
