'use strict';

var express = require('express');
var placeCrtl = require('./place.controller');
var router = express.Router();

router.post('/api/place/', placeCrtl.create);
router.put('/api/place/:id', placeCrtl.update);
router.delete('/api/place/:id', placeCrtl.destroy);

module.exports = router;




