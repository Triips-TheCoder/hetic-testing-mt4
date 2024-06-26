function rpnCalculator(num1, num2, operator) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('num1 and num2 must be numbers');
    }

    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('Invalid operator');
    }
}



module.exports = { rpnCalculator };