/**
 * Created by aqueelmiqdad on 1/13/17.
 */

"use strict";



/*
 |
 |  DEPENDENCY
 |
 */



var express = require('express');
var router = express.Router();

var Food = require('./Models/food');
var Serving = require('./Models/serving');
var Query = require('./Models/queries');




/*
 |
 |  Food Routes
 |
 */



// GET All Food
router.get("/", function (req, res) {

    console.log("POST received /food");
    Food.find({}, function (err, foods) {
        res.json({
            request: "All Food",
            data: foods
        });
    });

});

// GET Food by ID
router.get("/find/:id", function(req, res, next) {

    console.log("POST received /food/find/:id");

    if (!parseInt(req.params.id)) {
        var err = new Error("Invalid ID");
        err.status = 404;
        next(err);
    } else {
        next();
    }

    }, function (req, res) {

    Food.find({identifier: req.params.id}, function (err, foods) {
        res.json({
            request: "Food By Id",
            id: req.params.id,
            data: foods
        });
    });


});


// POST food to database
router.post("/", function (req, res) {

    console.log("POST received /food");
    var food = req.body;
    console.log(food)
    Food.create(food, function (err, food) {
        res.json({
            request: "Add new Food",
            created: food
        });
    });

});

// PUT (Update) food in database
router.put("/", function (req, res) {

    res.json({
        request: "Update Food",
        body: req.body,
        data: "Coming soon!"
    });

});




/*
 |
 |  Query Routes
 |
 */



router.get("/query", function (req, res) {

    console.log("GET received /query");
    Query.find({}, function (err, queries) {
        res.json({
            request: "Match Query",
            data: queries
        });
    });

});


// GET /query/:details
router.get("/query/:key", function (req, res) {

    var key = req.params.key;
    console.log("GET received /query/:key");
    Query.findOne({key: new RegExp(key, "i")}, function (err, queries) {
        res.json({
            request: "Match Query",
            data: queries
        });

    });

});


// POST Serving to database
router.post("/query", function (req, res) {

    console.log("POST received /query");
    var query = req.body;
    Query.create(query, function (err, serving) {
        res.json({
            request: "Add new Serving",
            created: serving
        });
    });

});

module.exports = router;