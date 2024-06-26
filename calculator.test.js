const { rpnCalculator } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(rpnCalculator(1, 2, '+')).toBe(3);
});


