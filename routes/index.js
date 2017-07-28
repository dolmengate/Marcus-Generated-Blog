var express = require('express');
var router = express.Router();
var textFill = require('../libs/TextFill');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: textFill.title(3),
      center: textFill.fill(40, 3)
  });
});

module.exports = router;
