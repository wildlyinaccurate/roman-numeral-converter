var assert = require('assert');
var generator = require('./index');

assert.equal('I', generator.generate(1));
assert.equal('II', generator.generate(2));
assert.equal('XIII', generator.generate(13));
assert.equal('XXXVIII', generator.generate(38));
assert.equal('LXVII', generator.generate(67));
assert.equal('DCCVII', generator.generate(707));
assert.equal('MMMCMXCIX', generator.generate(3999));
assert.throws(generator.generate.bind(generator, 4000), Error);
assert.throws(generator.generate.bind(generator, -1), Error);



console.log('All tests passed!');
