var fizzbuzz = require('./fizzbuzz.js');
var assert = require('assert');
assert(fizzbuzz(1),1);
assert(fizzbuzz(2),2);
assert(fizzbuzz(3),'fizz');
assert(fizzbuzz(4),4);
assert(fizzbuzz(5),'buzz')
assert(fizzbuzz(6),'fizz')
assert(fizzbuzz(7),7)
assert(fizzbuzz(8),8)
assert(fizzbuzz(9),'fizz')
assert(fizzbuzz(15),'fizzbuzz')
assert(fizzbuzz(16),16)
assert(fizzbuzz(17),17)
assert(fizzbuzz(18),'fizz')
assert(fizzbuzz(19),19)
assert(fizzbuzz(20),20)
assert(fizzbuzz(21),21)
assert(fizzbuzz(30),'fizzbuzz')
assert(fizzbuzz(35),'buzz')
assert(fizzbuzz(36),'fizz')
console.log('tests finished')
