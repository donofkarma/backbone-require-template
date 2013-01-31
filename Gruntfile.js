/*global module:false*/

module.exports = function(grunt) {
	// load any module dependcies
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-jasmine-task');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			js_banner: '/**\n' +
				'* <%= pkg.name %>\n' +
				'*\n' +
				'* @version	<%= pkg.version %>\n' +
				'* @author	<%= pkg.author %>\n' +
				'* @license	<%= pkg.licenses[0].type %> - <%= pkg.licenses[0].url %>\n' +
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
			},
			all: [
				'Gruntfile.js',
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
					out: "deploy/assets/js/script.min.js",
					name: 'main'
				}
			}
		},
		sass: {
			dev: {
				files: {
					'assets/css/style.css': 'assets/scss/style.scss'
				}
			}
		},
		cssmin: {
			reset: {
				src: ['assets/css/reset.css'],
				dest: 'deploy/assets/css/reset.css'
			},
			style: {
				src: ['assets/css/style.css'],
				dest: 'deploy/assets/css/style.css'
			}
		},
		watch: {
			sass: {
				files: ['assets/css/*.scss'],
				tasks: 'sass'
			},
			lint: {
				files: '<%= jshint.all %>',
				tasks: 'jshint'
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