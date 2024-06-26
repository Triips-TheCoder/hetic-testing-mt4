function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro");
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function squareRoot(a) {
    if (a < 0) {
        throw new Error("Racine carrée d'un nombre négatif");
    }
    return Math.sqrt(a);
}

function absolute(a) {
    return Math.abs(a);
}




module.exports = { sum, subtract, multiply };