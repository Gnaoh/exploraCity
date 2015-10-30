'use strict';

var _ = require('lodash');
var mongoose = require('mongoose'),
  db = require('./adventure.model'),
  Adventure = db.Adventure,
  Place = db.Place;

// send back all adventures
exports.index = function (req, res) {
  Adventure.find({}, function (err, adventures) {
    res.json(adventures);
  });
}

// create new adventure
exports.create = function (req, res) {
  // create new adventure with data from the body of the request (`req.body`)
  // body should contain the adventure text itself
  var newAdventure = new Adventure(req.body);

// save new adventure
  newAdventure.save(function (err, savedAdventure) {
    if (err) {
      res.status(422).send(err.errors.text.message);
    } else {
      res.json(savedAdventure);
    }
  });
}

// get one adventure
exports.show = function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find adventure in db by id
  Adventure.findOne({_id: targetId}, function (err, foundAdventure) {
    res.json(foundAdventure);
  });
}

// update adventure by replacing old adventure in db
exports.update = function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find adventure in db by id
  Adventure.findOne({_id: targetId}, function (err, foundAdventure) {
    // update the adventure's text
    foundAdventure.text = req.body.text;

    // save updated adventure in db
    foundAdventure.save(function (err, savedAdventure) {
      if (err) {
        res.status(422).send(err.errors.text.message);
      } else {
        res.json(savedAdventure);
      }
    });
  });
}

// delete the adventure
exports.destroy = function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find adventure in db by id and remove
  Adventure.findOneAndRemove({_id: targetId}, function (err, deletedAdventure) {
    res.json(deletedAdventure);
  });
}



