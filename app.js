/**
* App Config
**/

/* Dependencies */
var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express();

/* Configure App */
app.configure(function() {
	// set the port number to listen to
	app.set('port', process.env.PORT || 3000);

	// set the directory that holds the templates
	app.set('views', __dirname + '/views');

	// set the template engine to jade
	app.set('view engine', 'jade');

	// start the logger for requests
	app.use(express.logger('dev'));

	// object containing the parsed request body
	app.use(express.bodyParser());

	// simulates DELETE and PUT form methods
	app.use(express.methodOverride());

	// "app.router" positions our routes
	// above the middleware defined below,
	// this means that Express will attempt
	// to match & call routes _before_ continuing
	// on, at which point we assume it's a 404 because
	// no route has handled the request.
	app.use(app.router);

	// set the path for the statis assets
	app.use('/assets', express.static(__dirname + '/assets'));
});

/* Routes */
// 404 Error
app.use(function(req, res, next) {
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('404', { url: req.url });
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});
// 500 Error
app.use(function(err, req, res, next) {
	// we may use properties of the error object
	// here and next(err) appropriately, or if
	// we possibly recovered from the error, simply next().
	res.status(err.status || 500);
	res.render('500', { error: err });
});

// Homepage
app.get('/', function(req, res) {
	res.render('index', {
		title: 'Home'
	});
});

// Test error pages
app.get('/404', function(req, res, next) {
	// trigger a 404 since no other middleware
	// will match /404 after this one, and we're not
	// responding here
	next();
});
app.get('/403', function(req, res, next) {
	// trigger a 403 error
	var err = new Error('Not allowed!');
	err.status = 403;
	next(err);
});
app.get('/500', function(req, res, next) {
	// trigger a generic (500) error
	next(new Error('keyboard cat!'));
});

/* Server */
app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
