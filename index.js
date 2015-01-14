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
    90: 'LC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'DM',
    1000: 'M',
};

DecimalToNumeral.prototype.convert = function(decimal) {
    if (decimal > this.MAX_DECIMAL_VALUE) {
        throw new Error('Unable to convert numbers larger than ' + this.MAX_DECIMAL_VALUE);
    }

    return this.mapping[decimal];
};

module.exports = new DecimalToNumeral();
