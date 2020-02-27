const { Roman } = require('./roman');

test('Constructor doesnt throw', () => {
  new Roman('foo');
});
