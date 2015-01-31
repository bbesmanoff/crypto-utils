var Utils = require('../src/utils');
var expect = require('expect.js');

describe('Utils', function() {
  describe('#makeCiphertext', function() {
    it('should return a capitalized string', function() {
      var input = 'hello';
      var expectedOutput = 'HELLO';
      var actualOutput = Utils.makeCiphertext(input);

      expect(actualOutput).to.be(expectedOutput);
    });

    it('should remove spaces', function() {
      var input = 'hello world';
      var expectedOutput = 'HELLOWORLD';
      var actualOutput = Utils.makeCiphertext(input);

      expect(actualOutput).to.be(expectedOutput);
    });

    it('should remove numbers', function() {
      var input = 'hello7world';
      var expectedOutput = 'HELLOWORLD';
      var actualOutput = Utils.makeCiphertext(input);

      expect(actualOutput).to.be(expectedOutput);
    });

    it('should remove punctuation', function() {
      var input = 'hello world!';
      var expectedOutput = 'HELLOWORLD';
      var actualOutput = Utils.makeCiphertext(input);

      expect(actualOutput).to.be(expectedOutput);

    });
  });
});
