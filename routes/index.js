var express = require('express');
var router = express.Router();
var tf = require('../libs/TextFill');

var links = [];
for (var i = 0; i < 20; i++ )
  links[i] = tf.title(randInt(2, 3));

var headers = [];
for (var j = 0; j < 4; j++)
  headers[j] = tf.title(2);

var content = {};
for (var k = 0; k < 8; k++) {
    var prop = 'p' + k;
    content[prop] = tf.fill(60);
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "A generated website",
      introText: tf.fill(60),
      content: content,
      subtitle: tf.title(6),
      sidebarLinks: links,
      anchorLinks: ["Foo", "Bar", "Me", "You"],
      sectionHeaders: headers
  });
});

function randInt(start, end) {
    return Math.floor(Math.random() * end) + start;
}

module.exports = router;
