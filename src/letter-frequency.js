'use strict';

var ASCII_A = 65;

module.exports = {
  countLetters: function(input) {
    var result = {};

    for (var i = 0; i < 26; i++) {
      var key = String.fromCharCode(ASCII_A + i);

      result[key] = 0;
    }

    for (var i = 0; i < input.length; i++) {
      var ch = input[i];

      result[ch]++;
    }

    return result;
  }
};
