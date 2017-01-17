'use strict'

var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({

    key: {type: String, default: "No Query"},
    results: {type: Array, default: []}

});

var model = mongoose.model('query', querySchema);

module.exports = model;