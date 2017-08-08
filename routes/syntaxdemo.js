var express = require('express');
var router = express.Router();

var tf = require('../libs/textfill/TextFill');

var seeAlsos = [];
for (var i = 0; i < 20; i++ )
  seeAlsos[i] = tf.title(randInt(2, 3));

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
  res.render('syntaxdemo', {
    title: "A website which displays things",
      introText: tf.fill(60),
      content: content,
      subtitle: "Using JQuery AJAX requests",
      seeAlsos: seeAlsos,
      anchorLinks: anchorLinks,
      sectionHeaders: sectionHeaders
  });
});

router.post('/', function(req, res) {

  const regexes = {
    "keyword": /(function|for|while|if|return|break|continue|var|let|const|;)/g,
    "string": /['"](\w*\d*\s*[;,./|[\]\-+]*)*['"]/g,
    "number": /\d+\.*\d*/g,
    "property": /\.\w+\d*/g,
    "comment": /\/{2,}\s*(\w*\d*\s*)*/g
  };

  var markup = { };    // linenumber: "text with added markup"
  var regexTypes = Object.keys(regexes);  // string keys which correspond to css classes that will be added with markup

  var lineNumber = req.body.lineNumber;
  var lineText = req.body.lineText;

  if (lineText === undefined)
    lineText = '';

  for (var i in regexTypes) {
    var regex = regexTypes[i];

      // prevents lineChunks from being overwritten on each loop
      if (lineChunks === undefined)
        var lineChunks = lineText.split(' ');      // splitting on spaces doesn't allow for multiword strings

      // apply markup to each word if required based on regex matches
      lineChunks = lineChunks.map(function (chunk) {
        // replace special characters
        var specialCharacter = /%\d(\d|[A-Z])/g;
        if (specialCharacter.test(chunk)) {
          chunk = decodeChars(specialCharacter, chunk);
        }
        if (!/span/.test(chunk)) { // prevents searching through added html on later iterations
          var highlighted = chunk.replace(regexes[regex], "<span class=\'" + regex + "\'>$&</span>");
          return highlighted;
        }
        return chunk;
      });

      markup[lineNumber] = lineChunks.join(' ');
  }

  // add placeholder to keep empty line-text divs inline
  markup[lineNumber] = ' ' + markup[lineNumber];
  res.send(markup);
});

function randInt(start, end) {
    return Math.floor(Math.random() * end) + start;
}

// returns chunk with special characters decoded
function decodeChars(re, chunk) {

  var chars = {
    '%24': '$',
    '%26': '&',
    '%2B': '+',
    '%2C': ',',
    '%2F': '/',
    '%3A': ':',
    '%3B': ';',
    '%3D': '=',
    '%3F': '?',
    '%40': '@',
    '%20': ' ',
    '%22': '\"',
    '%3C': '<',
    '%3E': '>',
    '%23': '#',
    '%25': '%',
    '%7B': '{',
    '%7D': '}',
    '%7C': '|',
    '%5C': '\\',
    '%5E': '^',
    '%7E': '~',
    '%5B': '[',
    '%5D': ']',
    '%60': '`'
  };

  var decoded = chunk.replace(re, function (match) {
    chunk = chars[match];
    return chunk;
  });
  return decoded;
}


module.exports = router;
