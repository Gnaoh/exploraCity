'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Place = require('../place/place.model');


var AdventureSchema = new Schema({
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    default: '',
    trime: true
  },
  places: [Place],
  active: Boolean 
});

module.exports = mongoose.model('Adventure', AdventureSchema);