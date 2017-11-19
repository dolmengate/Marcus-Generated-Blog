var express = require('express');
var router = express.Router();

var tf = require('../libs/textfill/TextFill');

var seeAlsos = [];
for (var i = 0; i < 20; i++ )
  seeAlsos.push(tf.title(randInt(2, 3)));

var sectionHeaders = [];
for (var j = 0; j < 4; j++)
  sectionHeaders[j] = tf.title(3);

var content = {};
for (var k = 0; k < 8; k++) {
    var prop = 'p' + k;
    content[prop] = tf.fill(60);
}

var anchorLinks = [];
for (var l = 0; l < sectionHeaders.length; l++) {
  anchorLinks[l] = sectionHeaders[l];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "A website which displays things",
      introText: tf.fill(60),
      content: content,
      subtitle: "Here is a sample layout",
      seeAlsos: seeAlsos,
      anchorLinks: anchorLinks,
      sectionHeaders: sectionHeaders
  });
});

function randInt(start, end) {
  return Math.floor(Math.random() * end) + start;
}

module.exports = router;
