function RomanNumeralGenerator() {}

RomanNumeralGenerator.prototype.MAX_DECIMAL_VALUE = 3999;
RomanNumeralGenerator.prototype.mapping = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

/**
 * Iterate over each mapping, in reverse numerical order, calling {callback} on each value
 *
 * @param {Function} callback
 */
RomanNumeralGenerator.prototype.eachMapping = function(callback) {
    var numeralValues = Object.keys(this.mapping)
                              .sort(sortNumeric)
                              .reverse();

    numeralValues.forEach(callback);
};

/**
 * Convert an integer to roman numeral
 *
 * @param  {Number} decimal
 * @return {String}
 */
RomanNumeralGenerator.prototype.generate = function(decimal) {
    if (decimal > this.MAX_DECIMAL_VALUE) {
        throw new Error('Unable to convert numbers larger than ' + this.MAX_DECIMAL_VALUE);
    }

    if (decimal <= 0) {
        throw new Error('Unable to generate roman numerals for zero or below.');
    }

    var mapping = this.mapping;
    var numeral = '';

    this.eachMapping(function(value) {
        while (decimal >= value) {
            decimal = decimal - value;
            numeral = numeral + mapping[value];
        }
    });

    return numeral;
};

/**
 * Convert a roman numeral to an integer
 *
 * @param  {String} numeral
 * @return {Number}
 */
RomanNumeralGenerator.prototype.parse = function(numeral) {
    if (typeof numeral !== 'string' || numeral.match(/[^IVXLCDM]/)) {
        throw new Error('Invalid roman numeral supplied.');
    }

    var mapping = this.mapping;
    var decimalValue = 0;

    this.eachMapping(function(value) {
        var n = mapping[value];

        while (numeral.substr(0, n.length) === n) {
            numeral = numeral.substr(n.length);
            decimalValue = decimalValue + Number(value);
        }
    });

    return decimalValue;
};

/**
 * Compare function for Array.prototype.sort, for sorting numerically
 * @param  {*} a
 * @param  {*} b
 * @return {boolean}
 */
function sortNumeric(a, b) {
    return a - b;
}

module.exports = new RomanNumeralGenerator();
