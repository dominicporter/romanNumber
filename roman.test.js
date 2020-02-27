const { Roman } = require('./roman');

test('Given null, constructor throw "value required"', () => {
    expect(() => new Roman(null)).toThrow(new Error('value required'));
  });
  