// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    let sum = a + b ;
    console.log(sum)
    return 0;
}
add()

// Subtract small value from larger one
function subtract() {
    let sub = a - b ;
    console.log(sub)
    return 0;
}
subtract()

function multiply() {
    let multi = a * b ;
    console.log(multi)
    return 0;
}
multiply()

// Divide larger value by small
function divide() {
    let divi = a / b ;
    console.log(divi)
    return 0;
}
divide()

// Increase value of a and b by 1
function increment() {
    a = a + 1;
    b = b + 1;
    return 0;
}

// Decrease value of a and b by 1
function decrement() {
    a = a - 1;
    b = b - 1;
    return 0;
}

// Divide larger value by small to find the remainder
function reminder() {
    return (a > b ? a % b : b % a);
}
