var express = require('express');
var router = express.Router();
var tf = require('../libs/textfill/TextFill');

var links = [];
for (var i = 0; i < 20; i++ )
  links[i] = tf.title(randInt(2, 3));

var headers = [];
for (var j = 0; j < 4; j++)
  headers[j] = tf.title(3);

var content = {};
for (var k = 0; k < 8; k++) {
    var prop = 'p' + k;
    content[prop] = tf.fill(60);
}

var anchorLinks = [];

for (var l = 0; l < headers.length; l++) {
  anchorLinks[l] = headers[l];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Using views with Express and Jade",
      introText: tf.fill(60),
      content: content,
      subtitle: tf.title(5),
      sidebarLinks: links,
      anchorLinks: anchorLinks,
      sectionHeaders: headers,
      codez: "hi"
  });
});

function randInt(start, end) {
    return Math.floor(Math.random() * end) + start;
}

module.exports = router;
