const fs = require('fs');
var exports = module.exports = {};

var lines = fs.readFileSync(process.env.HOME + '/sites/me.com/libs/textfill/marcus.txt').toString().split("\n");

// get unmodified text of a given number from a given starting point
exports.fill = function (numWords, start) {
    if (start === undefined)
        start = 0;
    return getWords(numWords).split(' ').splice(start).join(' ');
};

// get capitalized words stripped of punctuation
exports.title = function (numWords) {
    var lowercase = /[a-z]/;
    var wordsArr = getWords(numWords).split(' ');
    for (var w = 0; w < wordsArr.length; w++) {
        var upperedWord = wordsArr[w];
        if (lowercase.test(wordsArr[w].charAt(0))) {
            upperedWord = wordsArr[w].charAt(0).toUpperCase();
            for (var l = 1; l < wordsArr[w].length; l++) {
                upperedWord += wordsArr[w].charAt(l);
            }
        }
        var punctuation = /[.,:;]/;
        if (punctuation.test(upperedWord.charAt(upperedWord.length - 1)))
            upperedWord = upperedWord.slice(0, upperedWord.length - 1);
        wordsArr[w] = upperedWord;
    }
    return wordsArr.join(' ');
};

// get a random line and split it into a specified number of words
function getWords(numWords) {
    var line = '';
    while (line.split(' ').length < numWords)
        line = lines[Math.floor(Math.random() * lines.length)];
    return line.split(' ').slice(0, numWords).join(' ');
}