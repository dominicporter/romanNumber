const romanDict = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const VALID_NUMERALS = 'MDCLXVI'; // Note these are in descending order

const getBiggestRomanThatFitsIn = (decimal) => {
    return Object.entries(romanDict).find(([,dec]) => dec <= decimal)[0];
};

const decimalToRoman = decimal => {
    var roman = '';
    while (decimal > 0){
        const nextNumerals = getBiggestRomanThatFitsIn(decimal);
        roman += nextNumerals;
        decimal -= romanDict[nextNumerals];
    }

    return roman;
};

function RomanNumber(input) {
    if (!(this instanceof RomanNumber)) return new RomanNumber(input);        

    if (input === null || input === '') throw new Error('value required');
    if (typeof(input) === 'number'){
        if (input < 1 || input > 3999) throw new Error('invalid range');

        this.decimal = input;
        this.roman = decimalToRoman(input);
    } 
    
    const inputRegexp = RegExp(`^[${VALID_NUMERALS}]+$`);
    if (typeof(input) === 'string'){
        if (!inputRegexp.test(input)) throw new Error('invalid value');
        VALID_NUMERALS.split('').forEach(c => {
            if (input.includes(c+c+c+c))throw new Error('invalid value');
        });

        this.decimal = 0;
        this.roman = input;
    } 

    this.toString = () => {
        return this.roman;
    };

    this.toInt = () => {
        return this.decimal;
    };
}

module.exports = { RomanNumber };
