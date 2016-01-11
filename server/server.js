'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3030;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes')(app);


process.on('uncaughtException', function (err) {
    console.log(err);
});

// Start Server
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});