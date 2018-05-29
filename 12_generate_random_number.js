let num1 = 22;

let num2 = 7;

let result = num1 / num2;

// Large number
console.log(result);

// Trim decimals
console.log(result.toFixed(2));

// Round Up
result = result.toFixed();
// 3.14 -> 3
console.log(Math.floor(result));
//3.14 -> 4
console.log(Math.ceil(3.14));

// Random number -> Math.random sends from 0 to 1
// This gives 0 to 9.9999999
console.log(Math.random() * 10)