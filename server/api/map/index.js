'use strict';

var express = require('express');
var controller = require('./map.controller');

var router = express.Router();

router.get('/map', controller.index);
router.get('/map/:id', controller.show);
router.post('/map', auth.isAuthenticated(), controller.create);
router.put('/map/:id', auth.isAuthenticated(), controller.update);
router.patch('/map/:id', auth.isAuthenticated(), controller.update);
router.delete('/map/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;