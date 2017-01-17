'use strict'

var mongoose = require('mongoose');

var servingSchema = new mongoose.Schema({


    foodIdentifier: {type: Number, default: -1},

    servingDescription: {type: String, default: "No Description"},
    servingUrl: {type: String, default: "No url"},
    metricServingUnit: {type: String, default: "No Unit"},
    measurementDescription: {type: String, default: "No Description"},
    numberOfUnits: {type: Number, default: -1},
    metricServingAmount: {type: Number, default: -1},
    servingId: {type: Number, default: -1},

    calories: {type: Number, default: -1},
    carbohydrate: {type: Number, default: -1},
    protein: {type: Number, default: -1},
    fat: {type: Number, default: -1},
    saturatedFat: {type: Number, default: -1},
    polyunsaturatedFat: {type: Number, default: -1},
    monounsaturatedFat: {type: Number, default: -1},
    transFat: {type: Number, default: -1},
    cholesterol: {type: Number, default: -1},
    sodium: {type: Number, default: -1},
    potassium: {type: Number, default: -1},
    fiber: Number,
    sugar: {type: Number, default: -1},
    vitaminC: {type: Number, default: -1},
    vitaminA: {type: Number, default: -1},
    calcium: {type: Number, default: -1},
    iron: {type: Number, default: -1}

});

var model = mongoose.model('serving', servingSchema);

module.exports = model;