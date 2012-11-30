Backbone.js/RequireJS Template
====================

Basic template for Backbone.js with RequireJS.

Initially this was created to help me learn how to put all of this together properly and eventually will become a base for any suitable projects.

Feel free to fork/clone/use it if you want to.

Libraries
---------------------

This template uses (all included):
- Backbone.js 0.9.2
- jQuery v1.8.0
- RequireJS 2.0.2
- RequireJS text 2.0.0
- Lo-Dash 0.8.2

Tools
---------------------

This template uses nodejs to execute concatenation (r.js for JavaScript), minification (r.js for JavaScript), linting and unit testing (Jasmine v1.3.0). The following node modules are included:
- gruntjs v0.3.17
- grunt-contrib-requirejs v0.3.3
- grunt-css v0.3.2
- grunt-jasmine-task v0.2.3 (requires PhantomJS)

To-do
---------------------

- Add package.json
- Add AppCache
- Add items from html-css-js-template
- Template overview
- Usage instructions

Changelog
---------------------

### 0.5
- Added grunt.js
- Added r.js optimisation via grunt.js
- Added Jasmine TDD framework - executing visually and via grunt.js
- .gitignore file update

### 0.4
- Moved css, js and images to assets folder
- Removed un-needed library definitions
- Replaced Underscore with lodash

### 0.3
- Added main template for app homepage

### 0.2
- Added a router
- Added explanitory index.html
- Added some basic styling
- Added exmaple functionality

### 0.1
- Added App.initialize() layer to init additional JS plugins outside of the Backbone framework (e.g. carousels and accordions)
- Adding initial code

License
---------------------

This work may be freely distributed under the MIT license.