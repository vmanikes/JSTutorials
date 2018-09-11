const super_heroes = ["iron man", "spider_man", 2, true];

// all
console.log(super_heroes);
// 1st element
console.log(super_heroes[0]);
// last element
console.log(super_heroes[super_heroes.length - 1]);

// Dynamic substitution, any JS can go in ${}
console.log(`We have ${super_heroes.length - 2} super heroes`);

const numbers = [1, 2, 3, 4, 5, 6];

// OPERATIONS ON STARTING ELEMENTS
// deleting or shifting the first element [2, 3, 4, 5, 6]
numbers.shift();

// Insert new at start of array [0, 2, 3, 4, 5, 6]
numbers.unshift(0);

// OPERATIONS ON END ELEMENTS

// Removes last element from array [0, 2, 3, 4, 5]
numbers.pop();

// Insert a element at last [0, 2, 3, 4, 5, 6]
numbers.push(6);

// OPERATIONS ON END ELEMENTS

// From position 2 delete 1 element and insert SOMETHING
numbers.splice(2, 1, "SOMETHING");
