var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Workshop Be MEAN' });
});

router.get('expose/:module/:view', function(req, res, next) {
  var url = req.params.module + '/views/' + req.params.view;
  console.log(url);
  res.render(url, { title: 'Workshop Be MEAN' });
});

module.exports = router;
