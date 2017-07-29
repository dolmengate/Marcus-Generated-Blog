var express = require('express');
var router = express.Router();
var tf = require('../libs/TextFill');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "A generated website",
      text: tf.fill(40),
      subtitle: tf.title(7),
      sidebarLinks: ["foo", "bar", "baz", "you", "me", "hello"]
  });
});

module.exports = router;
