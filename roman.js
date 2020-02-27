class Roman{
    constructor(numeral){
        if (numeral === null) throw new Error('value required')
        this.numeral = numeral;
        console.log(numeral);
    }
}

module.exports = { Roman };
