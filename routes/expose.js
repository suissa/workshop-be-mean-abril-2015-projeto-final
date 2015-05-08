var express = require('express');
var router = express.Router();

router.get('/:module/:view', function(req, res, next) {
  var url = req.params.module + '/views/' + req.params.view;
  res.render(url, { title: 'Workshop Be MEAN' });
});

module.exports = router;
