function DecimalToNumeral() {}

DecimalToNumeral.prototype.MAX_DECIMAL_VALUE = 3999;
DecimalToNumeral.prototype.mapping = {
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
 * Convert an integer to roman numeral
 *
 * @param  {number} decimal
 * @return {string}
 */
DecimalToNumeral.prototype.generate = function(decimal) {
    if (decimal > this.MAX_DECIMAL_VALUE) {
        throw new Error('Unable to convert numbers larger than ' + this.MAX_DECIMAL_VALUE);
    }

    if (decimal < 0) {
        throw new Error('Unable to generate roman numerals below zero.');
    }

    if (decimal === 0) {
        // The only edge case; 'nulla' is written to represent zero (literally
        // 'none' in latin)
        return 'nulla';
    }

    var mapping = this.mapping;
    var numeralValues = Object.keys(mapping).sort(sortNumeric).reverse();
    var numeral = '';

    numeralValues.forEach(function(value) {
        while (decimal >= value) {
            decimal = decimal - value;
            numeral = numeral + mapping[value];
        }
    });

    return numeral;
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

module.exports = new DecimalToNumeral();
