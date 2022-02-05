const { Person } = require("./Person");

class Teacher extends Person {
    constructor(name, age, gender, interests, subject) {
        super(name, age, gender, interests)
        this.subject = subject
    }

    myGreeting() {
        console.log(`Hello! My name is ${this.name}, i am ${this.age} years old, i am interested in ${this.interests} and now I am learning a new programming language named ${this.subject}`)
    }
}

exports.Teacher = Teacher