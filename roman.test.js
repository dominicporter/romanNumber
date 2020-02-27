const { Roman } = require('./roman');

test('Given null, constructor throw "value required"', () => {
    expect(() => new Roman(null)).toThrow(new Error('value required'));
  });
  
  test('Given empty string, constructor throw "value required"', () => {
    expect(() => new Roman('')).toThrow(new Error('value required'));
  });

  test('Given 0, constructor throw "invalid range"', () => {
    expect(() => new Roman(0)).toThrow(new Error('invalid range'));
  });
  test('Given negative, constructor throw "invalid range"', () => {
    expect(() => new Roman(-10)).toThrow(new Error('invalid range'));
  });
  test('Given bigger than 3999, constructor throw "invalid range"', () => {
    expect(() => new Roman(4000)).toThrow(new Error('invalid range'));
  });
