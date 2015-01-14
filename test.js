var assert = require('assert');
var generator = require('./index');

// RomanNumeralGenerator#generate
assert.equal('I', generator.generate(1));
assert.equal('II', generator.generate(2));
assert.equal('X', generator.generate(10));
assert.equal('XIII', generator.generate(13));
assert.equal('XXXVIII', generator.generate(38));
assert.equal('LXVII', generator.generate(67));
assert.equal('DCCVII', generator.generate(707));
assert.equal('MMMCMXCIX', generator.generate(3999));
assert.throws(generator.generate.bind(generator, 4000), Error);
assert.throws(generator.generate.bind(generator, 4001), Error);
assert.throws(generator.generate.bind(generator, 0), Error);
assert.throws(generator.generate.bind(generator, -1), Error);

// RomanNumeralGenerator#parse
assert.equal(1, generator.parse('I'));
assert.equal(2, generator.parse('II'));
assert.equal(10, generator.parse('X'));
assert.equal(13, generator.parse('XIII'));
assert.equal(38, generator.parse('XXXVIII'));
assert.equal(67, generator.parse('LXVII'));
assert.equal(707, generator.parse('DCCVII'));
assert.equal(3999, generator.parse('MMMCMXCIX'));
assert.throws(generator.parse.bind(generator, 'IVX'), Error);
assert.throws(generator.parse.bind(generator, 'nulla'), Error);
assert.throws(generator.parse.bind(generator, 'FOO'), Error);
assert.throws(generator.parse.bind(generator, 'XOOPS'), Error);
assert.throws(generator.parse.bind(generator, 42), Error);

console.log('All tests passed!');
