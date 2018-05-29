const student = {
    name: "Krishna",
    age: 24,
    subjects: {
        one: "English",
        two: "Science"
    }
};

// Convert to a string

const student2string = JSON.stringify(student);
console.log(student2string);

const string2json = JSON.parse(student2string);
console.log(string2json.subjects.two);