/*global module:false*/

module.exports = function(grunt) {
	// load any module dependcies
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-jasmine-runner');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

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
		lint: {
			files: [
				'grunt.js',
				'assets/js/*.js',
				'assets/js/collections/**/*.js',
				'assets/js/models/**/*.js',
				'assets/js/views/**/*.js'
			]
		},
		jasmine : {
			amd: true,
			helpers: [
				'assets/js/libs/require/require.js',
				'assets/js/main.js'
			],
			specs : 'test/spec/**/*_spec.js'
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "assets/js",
					mainConfigFile: "assets/js/main.js",
					out: "dist/assets/js/optimized.js",
					name: 'main'
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
		}
	});

	// Default task.
	grunt.registerTask('deploy', 'requirejs cssmin');
	grunt.registerTask('test', 'lint jasmine');
	grunt.registerTask('default', 'lint jasmine requirejs cssmin');
};