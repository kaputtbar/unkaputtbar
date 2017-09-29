
//  OpenShift sample Node application
var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('../routes/index');
//var users = require('../routes/users');


var _index = require('../routes/index');
var _json_parser = require('../routes/vignette/json_parser/json_parser');
var _nervous_clock = require('../routes/vignette/nervous_clock/nervous_clock');




/*____________________________________________
 * Event listener for HTTP server "error" event.
 **************************************************/
function on_Error(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/*__________________________________________________
 * Event listener for HTTP server "listening" event.
 *******************************************************/
function on_Listening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}




function Server_Main ()
{
	// DEFINE port AND ip_address VALUES
        this.ip_address = process.env.OPENSHIFT_NODEJS_IP;
        this.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
	
	// GUARD AGAINST undefined VARIABLE
        if (typeof this.ip_address === "undefined") {
		//  Log errors on OpenShift but continue w/ 127.0.0.1 - this
		//  allows us to run/test the app locally.
		console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
		this.ip_address = "127.0.0.1";
        };
	
	// SETUP TERMINATION HANDLERS
	this.Setup_Termination_Handlers();
}




Server_Main.prototype.Terminator = function _Terminator(sig)
{
	var self = this;
	
	if (typeof sig === "string") {
		console.log('%s: Received %s - terminating sample app ...',
		       Date(Date.now()), sig);
		process.exit(1);
	}
	console.log('%s: Node server stopped.', Date(Date.now()) );
}


Server_Main.prototype.Setup_Termination_Handlers = function _Setup_Termination_Handlers()
{
	var self = this;
	
        //  PROCESS ON EXIT AND SIGNALS.
        process.on('exit', function() { self.Terminator(); });

        // REMOVED 'SIGPIPE' FROM THE LIST - BUGZ 852598.
        [	'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
		'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
		process.on(element, function() { self.Terminator(element); });
        });
}



Server_Main.prototype.Start = function _Start()
{
	var self = this;
	
	//self.Initialize();
	
        //self.createRoutes();
        //var app = express.createServer();
        //var app = express();
	//console.log('EXPRESS', express);
	//console.log('APP EXPRESS', app);
	
	
        //var app = express.createApplication();
        var app = express();

	//console.log('APP EXPRESS', app);
	
	
	app.on('error', on_Error);
	app.on('listening', on_Listening);

	
	// view engine setup
	app.set('views', path.join(__dirname, '../views'));

console.log('PATH TO VIEWS:', path.join(__dirname, '../views'));

	app.set('view engine', 'html');
	app.set('view options', { layout: 'other.html' });

	app.engine ('html', require('hbs').__express);

	
	// in order to render each view with a different master
	// res.render('view', { title: 'my other page', layout: 'other' });
	//
	// http://stackoverflow.com/questions/26871522/how-to-change-default-layout-in-express-using-handlebars


	// HUH? 
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	// ROUTES
	//app.use('/', routes);
	//app.use('/users', users);
////////////////////////////////////////////////////
//////////////////////////////////////////////////// here you make your next routing extension ///////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


	app.use('/', _index);
	app.use('/', _json_parser);
/*************
	app.use('/vignette/json_parser', 
		function(req, res){
			console.log('got the /vignette/json_parser something!!!!');
			
		});
************************/
	app.use('/', _nervous_clock);

	
/***********	
	var route_list = require('./route_list');
	var prefix = route_list.path_prefix
	route_list.list.forEach (function (item, index) {
		console.log('path:', item.path, ' requires module:', prefix + item.module);
		//app.use(require());
		app.use(
			item.path, 
			require(prefix + item.module));
		
        });
***********************/

	
	
	console.log(app._router.stack);
	
	
	
	


	
	
	
	// CATCH 404 AND FORWARD TO ERROR HANDLER
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});
	

/************	
        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
*************************************/
	
	
	
	
        //  Start the app on the specific interface (and port).
        app.listen(
		self.port, 
		self.ip_address, 
	function() {
		console.log('%s: Node server started on %s:%d ...',
			Date(Date.now() ), self.ip_address, self.port);
        });

	
	self.app = app;
}



var server_main = new Server_Main();

// var route_list = require('../routes.js');

//server_main.Start(route_list);

server_main.Start();