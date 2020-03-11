const palindrome = require('../functions/palindrome');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;


// BDD with expect
describe('Palindrome', () => {
    it('should return IS NOT A PALINDROME when the value is not the same backwards', () => {
        const word = "leonardo";
        expect(palindrome(word)).to.equal('IS NOT A PALINDROME');
    }),

    it('should return IS A PALINDROME when the value is the same backwards', () => {
        const word = "ANA";
        expect(palindrome(word)).to.be.equal('IS A PALINDROME');
    });;
});
