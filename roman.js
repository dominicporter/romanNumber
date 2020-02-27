const romanDict = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};
const VALID_NUMERALS = 'MCDXLVI';
const decimalToRoman = decimal => {
    return VALID_NUMERALS.split('').reduce((acc,curr) => {
        return (romanDict[curr] === decimal) ? curr: acc;
    }, 0);
};
class RomanNumber{
    constructor(input){
        

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
    }

    toString(){
        return this.roman;
    }

    toInt(){
        return this.decimal;
    }
}

module.exports = { RomanNumber };
