var fizzbuzz = require('./fizzbuzz.js');
var assert = require('assert');

assert.equal(fizzbuzz(1),1);
assert.equal(fizzbuzz(2),2);
assert.equal(fizzbuzz(3),'fizz');
assert.equal(fizzbuzz(4),4);
assert.equal(fizzbuzz(5),'buzz')
assert.equal(fizzbuzz(6),'fizz')
assert.equal(fizzbuzz(7),7)
assert.equal(fizzbuzz(8),8)
assert.equal(fizzbuzz(9),'fizz')
assert.equal(fizzbuzz(10),'buzz')
assert.equal(fizzbuzz(15),'fizzbuzz')
assert.equal(fizzbuzz(16),16)
assert.equal(fizzbuzz(17),17)
assert.equal(fizzbuzz(18),'fizz')
assert.equal(fizzbuzz(19),19)
assert.equal(fizzbuzz(20),'buzz')
assert.equal(fizzbuzz(21),'fizz')
assert.equal(fizzbuzz(30),'fizzbuzz')
assert.equal(fizzbuzz(35),'buzz')
assert.equal(fizzbuzz(36),'fizz')
console.log('tests finished')
