class Roman{
    constructor(numeral){
        if (numeral === null || numeral === '') throw new Error('value required');
        if (typeof(numeral) === 'number' && (numeral < 1 || numeral > 3999)) throw new Error('invalid range');
        const numeralRegexp = RegExp('^[MCDXLVI]+$');
        if (typeof(numeral) === 'string' && !numeralRegexp.test(numeral)) throw new Error('invalid value');
        
        this.numeral = numeral;
        console.log(numeral);
    }
}

module.exports = { Roman };
