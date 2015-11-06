var assert = require('assert')

function fz(n){return(n%15==0?'fizzbuzz':(n%3)==0?'fizz':((n%5 ==0)?'buzz':n))}

assert(1,1);
assert(2,2);
assert(3,'fizz');
assert(4,4);
assert(5,'buzz')
assert(6,'fizz')
assert(7,7)
assert(8,8)
assert(9,'fizz')
assert(15,'fizzbuzz')
assert(16,16)
assert(17,17)
assert(18,'fizz')
assert(19,19)
assert(20,20)
assert(21,21)
assert(30,'fizzbuzz')
assert(35,'buzz')
assert(36,'fizz')
