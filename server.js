const { Students } = require('./Student');
const { Teacher } = require('./Teacher');


let student1 = new Students('Vlad', 27, 'male', 'Programming')
let teacher1 = new Teacher('Alina', 30, 'female', 'Programming', 'NodeJS')
student1.myGreeting()
teacher1.myGreeting()