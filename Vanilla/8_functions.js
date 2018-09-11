let name = function (data) {
    return data
};

console.log(name("Krishna Chaitanya"));

// Default Parameters
let adder = function (num1 = 100, num2 = 200) {
    return num1 + num2;
};

console.log(adder());
