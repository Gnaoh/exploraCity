'use strict';

module.exports = function(router) {
var express = require('express');
var auth = require('../../auth/auth.service');
var	adventureCrtl = require('./adventure.controller');
// var	placeCrtl = require('../place/place.controller');

var router = express.Router();

//adventures routes
router.get('/api/adventures', adventureCrtl.index);
router.get('/api/adventures/:id', adventureCrtl.show);
router.post('/api/adventures/', adventureCrtl.create);
router.put('/api/adventures/:id', adventureCrtl.update);
router.patch('/api/adventures/:id', adventureCrtl.update);
router.delete('/api/adventures/:id', adventureCrtl.destroy);


};