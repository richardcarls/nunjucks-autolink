/* global describe, it */

var expect = require('chai').expect;

describe('nunjucks-autolink', function() {

  var filter = require('../');
  
  describe('with a string containing URLs', function() {

    var result = filter(
      'The string contains a link: https://example.com'
    );
    
    it('should return the string with anchor markup', function() {
      expect(result).to.equal(
        'The string contains a link: <a href="https://example.com">https://example.com</a>'
      );
    });
    
  }); // with a string containing URLs

  describe('with a string not containing URLs', function() {

    var result = filter(
      'The string contains no links'
    );
    
    it('should return the string with anchor markup', function() {
      expect(result).to.equal(
        'The string contains no links'
      );
    });
    
  }); // with a string not containing URLs

  describe('with an empty string', function() {

    var result = filter('');
    
    it('should return false', function() {
      expect(result).to.be.false;
    });
    
  }); // with an empty string

  describe('with the number 0', function() {

    var result = filter(0);
    
    it('should return the string containing 0', function() {
      expect(result).to.equal('0');
    });
    
  }); // with the number 0

  describe('with boolean values', function() {

    it('should return string values', function() {
      var result = filter(true);
      
      expect(result).to.equal('true');

      result = filter(false);

      expect(result).to.equal('false');
    });
    
  }); // with boolean values
  
}); // nunjucks-autolink
