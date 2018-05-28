const super_heroes = ["iron man", "spider_man", 2, true];

// all
console.log(super_heroes);
// 1st element
console.log(super_heroes[0]);
// last element
console.log(super_heroes[super_heroes.length - 1]);

// Dynamic substitution, any JS can go in ${}
console.log(`We have ${super_heroes.length - 2} super heroes`);