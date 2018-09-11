class User {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`
    }

}

const john = new User("John", "doe", 24);
console.log(john.getFullName());

