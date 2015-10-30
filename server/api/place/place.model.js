'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model('Place', PlaceSchema);

