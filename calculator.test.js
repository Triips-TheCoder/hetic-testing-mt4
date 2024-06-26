const { rpnCalculator } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(rpnCalculator(1, 2, '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(rpnCalculator(5, 3, '-')).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
    expect(rpnCalculator(4, 2, '*')).toBe(8);
});

