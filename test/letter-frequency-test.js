var LetterFrequency = require('../src/letter-frequency');
var expect = require('expect.js');

describe('LetterFrequency', function() {
  describe('#countLetters', function() {
    it('counts letters that exist in the ciphertext', function() {
      var input = "AQPL";
      var expectedOutputKeys = ['A', 'Q', 'P', 'L'];
      var actualOutput = LetterFrequency.countLetters(input);

      expect(actualOutput).to.have.keys(expectedOutputKeys);
    });

    it('counts letters that are not in the ciphertext', function() {
      var input = "AQPL";
      var expectedOutputKey = 'B';
      var actualOutput = LetterFrequency.countLetters(input);

      expect(actualOutput).to.have.key(expectedOutputKey);
    });
  });
});
