let a = [1, 2, 3, 5 ,6 ];

// Index if exits else -1
console.log(a.indexOf(1));

let obj_array = [{title: 1}, {title: 2}, {three: 3}];

const index = obj_array.findIndex(function (value, index) {
    // Moves to every element and returns the result
    return value.title === 1;
});

console.log(index);
