
var mongoose = require('mongoose'),
  db = require('./place.model'),
    Adventure = db.Adventure,
    Place = db.Place;

// create place embedded in adventure
exports.create = function (req, res) {
  // set the value of the adventure id
  var adventureId = req.params.adventureId;

  // store new place in memory with data from request body
  var newPlace = new Place(req.body);

  // find adventure in db by id and add new place
  Adventure.findOne({_id: adventureId}, function (err, foundAdventure) {
    foundAdventure.places.push(newPlace);
    foundAdventure.save(function (err, savedAdventure) {
      res.json(newPlace);
    });
  });
};

// update place embedded in adventure
exports.update = function (req, res) {
  // set the value of the adventure and place ids
  var adventureId = req.params.adventureId;
  var placeId = req.params.id;

  // find adventure in db by id
  Adventure.findOne({_id: adventureId}, function (err, foundAdventure) {
    // find place embedded in Adventure
    var foundPlace = foundAdventure.places.id(placeId);
    // update place text with data from request body
    foundPlace.text = req.body.text;
    foundAdventure.save(function (err, savedAdventure) {
      res.json(foundPlace);
    });
  });
};

// delete place embedded in adventure
exports.destroy = function (req, res) {
  // set the value of the adventure and place ids
  var adventureId = req.params.adventureId;
  var placeId = req.params.id;

  // find adventure in db by id
  Adventure.findOne({_id: adventureId}, function (err, foundAdventure) {
    // find place embedded in Adventure
    var foundPlace = foundAdventure.places.id(placeId);
    // remove place
    foundPlace.remove();
    foundAdventure.save(function (err, savedAdventure) {
      res.json(foundPlace);
    });
  });
};
