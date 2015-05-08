var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', function(req, res, next) {
  Controller.retrieve(req, res);
});

router.get('/:id', function(req, res, next) {
  Controller.get(req, res);
});

router.post('/', function(req, res, next) {
  Controller.create(req, res);
});

router.put('/:id', function(req, res, next) {
  Controller.update(req, res);
});

router.delete('/:id', function(req, res, next) {
  Controller.delete(req, res);
});



module.exports = router;
