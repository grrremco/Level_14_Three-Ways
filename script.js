function declaration(number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const outcome = total * total;
    return outcome;
}

const result1 = declaration(6, 5);
console.log(result1);


const expression = function(number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const outcome = total * total;
    return outcome;
};

const result2 = expression(6, 5);
console.log(result2);


const arrow = (number1, number2) => {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const outcome = total * total;
    return outcome;
};

const result3 = arrow(6, 5);
console.log(result3);