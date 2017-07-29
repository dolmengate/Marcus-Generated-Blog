const fs = require('fs');
var exports = module.exports = {};

var lines = fs.readFileSync(process.env.HOME + '/sites/me.com/libs/marcus.txt').toString().split("\n");
var words = [];

// get unmodified text
exports.fill = function (numWords, start) {
    if (start === undefined)
        start = 0;
    return getWords(numWords).split(' ').splice(start).join(' ');
};

// get capitalized words
exports.title = function (numWords) {
    var lowercase = /[a-z]/;
    var words = getWords(numWords).split(' ');
    for (var w = 0; w < words.length - 1; w++) {
        var upperedWord = words[w];
        if (lowercase.test(words[w].charAt(0))) {
            upperedWord = words[w].charAt(0).toUpperCase();
            for (var l = 1; l < words[w].length; l++) {
                upperedWord += words[w].charAt(l);
            }
        }
        var punctuation = /[.,:;]/;
        if (punctuation.test(upperedWord.charAt(upperedWord.length - 1)))
            upperedWord = upperedWord.slice(0, upperedWord.length - 1);
        words[w] = upperedWord;
    }
    return words.join(' ');
};

// get a random line and split it into words
function getWords(numWords) {
    while (words.length < numWords)
        words = lines[Math.floor(Math.random() * lines.length)].split(' ');
    var r = '';
    for (var i = 0; i < numWords; i++) {
        r += words[i] + " ";
    }
    return r;
}