'use strict';

var isLetter = function(ch) {
  return 'A' <= ch && ch <= 'Z';
}

module.exports = {
  // String -> String
  // Removes anything from the input that is not a letter.  It returns an
  // upper-cased version of the input.
  makeCiphertext: function(input) {
    var ciphertext = '';

    for (var i = 0; i < input.length; i++) {
      var ch = input[i].toUpperCase();

      if (isLetter(ch)) {
        ciphertext += ch;
      }
    }

    return ciphertext;
  }

};
