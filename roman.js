class Roman{
    constructor(numeral){
        if (numeral === null || numeral === '') throw new Error('value required');
        if (numeral < 1 || numeral > 3999) throw new Error('invalid range');
        
        this.numeral = numeral;
        console.log(numeral);
    }
}

module.exports = { Roman };
