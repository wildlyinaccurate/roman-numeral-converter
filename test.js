var assert = require('assert');
var decimalToNumeral = require('./index');

assert.equal('I', decimalToNumeral.generate(1));
assert.equal('II', decimalToNumeral.generate(2));
assert.equal('XIII', decimalToNumeral.generate(13));
assert.equal('XXXVIII', decimalToNumeral.generate(38));
assert.equal('LXVII', decimalToNumeral.generate(67));
assert.equal('DCCVII', decimalToNumeral.generate(707));
assert.equal('MMMCMXCIX', decimalToNumeral.generate(3999));
assert.throws(decimalToNumeral.generate.bind(decimalToNumeral, 4000), Error);
assert.throws(decimalToNumeral.generate.bind(decimalToNumeral, -1), Error);

console.log('All tests passed!');
