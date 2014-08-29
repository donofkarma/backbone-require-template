/**
* App Config
**/

/* Dependencies */
var
    express = require('express'),
    // express middleware dependencies
    expressBodyParser = require('body-parser'),
    expressMethodOverride = require('method-override'),
    expressMorgan  = require('morgan'),
    http = require('http'),
    path = require('path'),
    app = express();


/* Configure App */
// set the port number to listen to
app.set('port', process.env.PORT || 3000);

// set the directory that holds the templates
app.set('views', __dirname + '/views');

// set the template engine to jade
app.set('view engine', 'jade');

// start the logger for requests
app.use(expressMorgan('short'));

// object containing the parsed request body
app.use(expressBodyParser.text());

// simulates DELETE and PUT form methods
app.use(expressMethodOverride());

// set the path for the statis assets
app.use('/assets', express.static(__dirname + '/assets'));


/* Routes */
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
    // trigger a generic 500 error
    var err = new Error('keyboard cat!');
    err.status = 500;
    next(err);
});

// Server errors
// 404
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
// 500
app.use(function(err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});

/* Server */
app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
