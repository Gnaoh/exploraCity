'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MapSchema = new Schema({
  name: String,
  description: String,
  category: String,
  createdAt: {type: Date, default: Date.now()},
  places: {
    name: String, 
    description: String
  },
  active: Boolean
});

module.exports = mongoose.model('Map', MapSchema);