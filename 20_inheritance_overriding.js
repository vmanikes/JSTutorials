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

class ExtendedUser extends User {
    constructor(fname, lname, age, subject){
        // Must be in the first line
        super(fname, lname, age);
        this.subject = subject;
    }

    getFullName(){
        return `${this.fname} ${this.lname} ${this.subject}`
    }
}

var http = require("http");
http.get()