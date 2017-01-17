'use strict'

var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({

    identifier: {type: Number, default: -1},
    results: {type: Array, default: []}

});

var model = mongoose.model('food', foodSchema);

module.exports = model;