const numbers = [1,2,3,4,5,6,7];

for (let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
}


numbers.forEach(function (value, index) {
    console.log(value, index);
});