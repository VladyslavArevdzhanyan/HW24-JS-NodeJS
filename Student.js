const { Person } = require("./Person");

class Students extends Person {
    constructor(name, age, gender, interests) {
        super(name, age, gender, interests)
        
    }

    myGreeting() {
        console.log(`hello, my name is ${this.name} i'm ${this.age} year old, and i am interested in ${this.interests}`)
    }
}

exports.Students = Students