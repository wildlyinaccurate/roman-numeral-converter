var assert = require('assert');
var decimalToNumeral = require('./index');

assert.equal('I', decimalToNumeral.convert(1));
assert.equal('II', decimalToNumeral.convert(2));
assert.equal('XIII', decimalToNumeral.convert(13));
assert.equal('MMMCMXCIX', decimalToNumeral.convert(3999));
assert.throws(decimalToNumeral.convert.bind(decimalToNumeral, 4000), Error);
