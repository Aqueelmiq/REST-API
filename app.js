/**
 * Created by aqueelmiqdad on 1/13/17.
 */

'use strict'

/*
 |
 |  DEPENDENCIES
 |
 */

var express = require('express');
var app = express();
var jsonParser = require('body-parser');
var routes = require("./routes");
var db = require('./database');


app.use(jsonParser.urlencoded({
    extended: true
}));

app.use(jsonParser.json());

/*
 |
 |  ROUTES
 |
 */

app.use("/food", routes);

app.use("/hello", function (req, res, next) {

    console.log('Hello Middle Wear');
    next();

});

/*
 |
 |  ERROR Handling
 |
 */

app.use(function (req, res, next) {
   var err = new Error("Error!");
   err.status = 404;
   next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message,
        status: err.status
    });
});


/*
 |
 |  DEPLOYMENT
 |
 */

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Hello, Server has started!");
});