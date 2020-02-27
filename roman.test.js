const { RomanNumber } = require('./roman');

test('Given null, constructor throw "value required"', () => {
    expect(() => new RomanNumber(null)).toThrow(new Error('value required'));
});

test('Given empty string, constructor throw "value required"', () => {
    expect(() => new RomanNumber('')).toThrow(new Error('value required'));
});

test('Given 0, constructor throw "invalid range"', () => {
    expect(() => new RomanNumber(0)).toThrow(new Error('invalid range'));
});
test('Given negative, constructor throw "invalid range"', () => {
    expect(() => new RomanNumber(-10)).toThrow(new Error('invalid range'));
});
test('Given bigger than 3999, constructor throw "invalid range"', () => {
    expect(() => new RomanNumber(10000)).toThrow(new Error('invalid range'));
});

test('Given invalid values, constructor throw "invalid value"', () => {
    expect(() => new RomanNumber('abc123')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('CD1X')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('123')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('ABC')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber(',.;#!"£$%%^&')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('error')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('IIII')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('MMMMCMXCIX')).toThrow(new Error('invalid value'));
    expect(() => new RomanNumber('MMMMDMXCIX')).toThrow(new Error('invalid value'));
});

test('When constructor called with a valid value, returns a valid object', () => {
    const rn = new RomanNumber(1);
    expect(typeof (rn)).toEqual('object');
});

test('Given simple numbers, converts them to Roman', () => {
    expect((new RomanNumber(1000)).toString()).toEqual('M');
    expect((new RomanNumber(500)).toString()).toEqual('D');
    expect((new RomanNumber(100)).toString()).toEqual('C');
    expect((new RomanNumber(50)).toString()).toEqual('L');
    expect((new RomanNumber(10)).toString()).toEqual('X');
    expect((new RomanNumber(5)).toString()).toEqual('V');
    expect((new RomanNumber(1)).toString()).toEqual('I');
});

test('Given non subtractive numbers, converts them to Roman', () => {
    expect((new RomanNumber(3000)).toString()).toEqual('MMM');
    expect((new RomanNumber(1515)).toString()).toEqual('MDXV');
    expect((new RomanNumber(501)).toString()).toEqual('DI');
    expect((new RomanNumber(210)).toString()).toEqual('CCX');
    expect((new RomanNumber(65)).toString()).toEqual('LXV');
    expect((new RomanNumber(33)).toString()).toEqual('XXXIII');
    expect((new RomanNumber(7)).toString()).toEqual('VII');
    expect((new RomanNumber(3)).toString()).toEqual('III');
    expect((new RomanNumber(2)).toString()).toEqual('II');
});

test('Given complicated numbers, converts them to Roman', () => {
    expect((new RomanNumber(4)).toString()).toEqual('IV');
    expect((new RomanNumber(1968)).toString()).toEqual('MCMLXVIII');
    expect((new RomanNumber(1473)).toString()).toEqual('MCDLXXIII');
    expect((new RomanNumber(2999)).toString()).toEqual('MMCMXCIX');
});

test('When library called without new, still gets object', () => {
    expect((RomanNumber(1968)).toString()).toEqual('MCMLXVIII');
});

test('Given simple numerals, converts them to Arabic', () => {
    expect((new RomanNumber('M')).toInt()).toEqual(1000);
    expect((new RomanNumber('D')).toInt()).toEqual(500);
    expect((new RomanNumber('C')).toInt()).toEqual(100);
    expect((new RomanNumber('L')).toInt()).toEqual(50);
    expect((new RomanNumber('X')).toInt()).toEqual(10);
    expect((new RomanNumber('V')).toInt()).toEqual(5);
    expect((new RomanNumber('I')).toInt()).toEqual(1);
});

test('Given complex numerals, converts them to Arabic', () => {
    expect((new RomanNumber('III')).toInt()).toEqual(3);
    expect((new RomanNumber('IV')).toInt()).toEqual(4);
    expect((new RomanNumber('CDXXIX')).toInt()).toEqual(429);
    expect((new RomanNumber('MCDLXXXII')).toInt()).toEqual(1482);
    expect((new RomanNumber('MCMLXXX')).toInt()).toEqual(1980);
    expect((new RomanNumber('MCMLXVIII')).toInt()).toEqual(1968);
    expect((new RomanNumber('MCDLXXIII')).toInt()).toEqual(1473);
});

