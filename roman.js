const romanDict = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};

const VALID_NUMERALS = 'MDCLXVI'; // Note these are in descending order

const getBiggestRomanThatFitsIn = (decimal) =>{
    var retVal = '';
    VALID_NUMERALS.split('').forEach(numeral => {
        // TODO refactor this without iterating over whole array
        if(retVal === '' && romanDict[numeral] <= decimal) {
            retVal = numeral;
         }
    });
    return retVal;
};

const decimalToRoman = decimal => {
    var roman = '';
    while (decimal > 0){
        const nextChar = getBiggestRomanThatFitsIn(decimal);
        roman += nextChar;
        decimal -= romanDict[nextChar];
    }

    return roman;
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
