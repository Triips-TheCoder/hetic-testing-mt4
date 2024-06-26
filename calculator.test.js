const { sum, subtract, multiply , divide, modulus, power, squareRoot, absolute } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('modulus 5 % 2 to equal 1', () => {
    expect(modulus(5, 2)).toBe(1);
});

test('power 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
});

test('squareRoot of 9 to equal 3', () => {
    expect(squareRoot(9)).toBe(3);
});

test('absolute of -5 to equal 5', () => {
    expect(absolute(-5)).toBe(5);
});
