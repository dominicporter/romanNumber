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

const getBiggestRomanThatFitsIn = arabic => {
    return Object.entries(romanDict).find(([, dec]) => (dec <= arabic))[0];
};

const getNumeralsAtBeginning = roman => {
    return Object.entries(romanDict).find(([rom,]) => roman.startsWith(rom))[0];
};

const arabicToRoman = arabic => {
    if (arabic === 0) return '';

    const nextNumerals = getBiggestRomanThatFitsIn(arabic);
    return nextNumerals + arabicToRoman(arabic - romanDict[nextNumerals]);
};

const romanToArabic = roman => {
    if (roman === '') return 0;

    const startNumerals = getNumeralsAtBeginning(roman);
    return romanDict[startNumerals] + romanToArabic(roman.substr(startNumerals.length));
};

function RomanNumber(input) {
    if (!(this instanceof RomanNumber)) return new RomanNumber(input);

    if (input === null || input === '') throw new Error('value required');
    if (typeof (input) === 'number') {
        if (input < 1 || input > 3999) throw new Error('invalid range');

        this.arabic = input;
        this.roman = arabicToRoman(input);
    } else if (typeof (input) === 'string') {
        const inputRegexp = RegExp(`^[${VALID_NUMERALS}]+$`);
        if (!inputRegexp.test(input)) throw new Error('invalid value');
        VALID_NUMERALS.split('').forEach(c => {
            if (input.includes(c + c + c + c)) throw new Error('invalid value');
        });

        this.arabic = romanToArabic(input);
        this.roman = input;
    } else {
        // Unknown input type
        throw new Error('invalid value');
    }

    this.toString = () => this.roman;
    this.toInt = () => this.arabic;
}

module.exports = { RomanNumber };
