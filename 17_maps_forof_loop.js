let krishna = {
    name: "krishna",
    age: 24,
    isActive: true
};

let ramesh = {
    name: "ramesh",
    age: 24,
    isActive: true
};

let suresh = {
    name: "suresh",
    age: 24,
    isActive: true
};

// Returns a iterator, can see how many elements are there which is not possible with objects

let users = new Map();
users.set('krishna', krishna);
users.set('ramesh', ramesh);
users.set('suresh', suresh);

console.log(users); //Map {'krishna' => { name: 'krishna', age: 24, isActive: true }, 'ramesh' => { name: 'ramesh', age: 24, isActive: true }, 'suresh' => { name: 'suresh', age: 24, isActive: true } }
console.log(users.size);
console.log(users.get("krishna"));
console.log(users.get("krishna").name);
console.log(users.keys());
console.log(users.values());

// FOR OF
for (const key of users.keys()) {
    console.log(key);
}

for (const [key, value] of users.entries()) {
    console.log(key);
}
