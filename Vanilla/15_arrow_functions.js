// DO NOT USE THESE IN OBJECTS AND CONSTRUCTORS

const hello = function (name) {
    return "hello " + name;
};

// Convert to arrow function
const hello_arrow = (name) => {
    return `hello ${name}`;
};

console.log(hello_arrow("krishna"));

// Convert to arrow function
const hello_arrow_return_removed = (name) => `hello ${name}`;

console.log(hello_arrow_return_removed("krishna"));