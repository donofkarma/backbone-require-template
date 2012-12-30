/*global module:false*/

module.exports = function(grunt) {
	// load any module dependcies
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-jasmine-task');

	// Project configuration.
	grunt.initConfig({
		meta: {
			name: 'Backbone.js/RequireJS Template',
			css_version: '0.4',
			css_banner: '/**\n' +
				'* <%= meta.name %>\n' +
				'*\n' +
				'* @version	<%= meta.css_version %>\n' +
				'* @author	Jasal Vadgama - http://blacklabelcreative.com/\n' +
				'* @license	MIT\n' +
				'**/\n'
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
				browser: true
			},
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
		lint: {
			files: [
				'grunt.js',
				'assets/js/*.js',
				'assets/js/collections/**/*.js',
				'assets/js/models/**/*.js',
				'assets/js/views/**/*.js'
			]
		},
		jasmine: {
			all: ['test/index.html']
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "assets/js",
					mainConfigFile: "assets/js/main.js",
					out: "dist/assets/js/script.min.js",
					name: 'main'
				}
			}
		},
		sass: {
			dev: {
				files: {
					'assets/css/style.css': 'assets/css/style.scss',
					'assets/css/style_small.css': 'assets/css/style_small.scss',
					'assets/css/style_medium.css': 'assets/css/style_medium.scss',
					'assets/css/style_large.css': 'assets/css/style_large.scss'
				}
			}
		},
		cssmin: {
			reset: {
				src: ['<banner:meta.css_banner>', 'assets/css/reset.css'],
				dest: 'dist/assets/css/reset.min.css'
			},
			style: {
				src: ['<banner:meta.css_banner>', 'assets/css/style.css'],
				dest: 'dist/assets/css/style.min.css'
			}
		},
		watch: {
			sass: {
				files: [
					'assets/css/style.scss',
					'assets/css/style_small.scss',
					'assets/css/style_medium.scss',
					'assets/css/style_large.scss'
				],
				tasks: 'sass'
			}
		}
	});

	// run the tests only
	grunt.registerTask('test', 'lint jasmine');
	// run the concatenation and minification only
	grunt.registerTask('deploy', 'requirejs cssmin');
	// default task - run it all
	grunt.registerTask('default', 'lint jasmine requirejs sass cssmin');
};