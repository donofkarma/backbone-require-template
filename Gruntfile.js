/*global module:false*/

module.exports = function(grunt) {
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
				'assets/js/*.js',
				'assets/js/collections/**/*.js',
				'assets/js/models/**/*.js',
				'assets/js/views/**/*.js'
			]
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
					'assets/css/style.css': 'assets/scss/style.scss',
					'assets/css/style_small.css': 'assets/scss/style_small.scss',
					'assets/css/style_medium.css': 'assets/scss/style_medium.scss',
					'assets/css/style_large.css': 'assets/scss/style_large.scss'
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
				files: ['assets/scss/*.scss'],
				tasks: 'sass'
			},
			lint: {
				files: '<%= jshint.all %>',
				tasks: 'jshint'
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s)
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('deploy', ['sass', 'cssmin', 'requirejs']);
	grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'requirejs']);
};