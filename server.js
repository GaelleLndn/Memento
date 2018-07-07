// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


/**
 * App  && Routes
 */
const indexRouter = require('./routes/index');
const logRouter = require('./routes/log');
const categoryRouter = require('./routes/category')
const userRouter = require('./routes/user')


const app = express();

    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Point static path to dist
    app.use(express.static(path.join(__dirname, 'dist')));

    // Set our api routes
    app.use('/', indexRouter);
    app.use('/user', userRouter);
    app.use('/category', categoryRouter);  
    app.use('/log', logRouter);

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

     
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
    app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
  //Listen on provided port, on all network interfaces.
  server.listen(port, () => console.log(`API running on localhost:${port}`));


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://GaelleM:S1mplon@ds129541.mlab.com:29541/mementodb';
  mongoose.connect(mongoDB);
  mongoose.Promise = global.Promise;

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

