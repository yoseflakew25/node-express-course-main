// Modules

const names = require('./04-names')
const data = require('./06-alternative-flavor')
const sayHi = require('./05-utils')

// console.log(names);

// const sayHi = (name) => {


//     console.log(`Hello there ${name}`);

// }

console.log(data.singlePerson.name);

sayHi(data.singlePerson.name)

// sayHi(names.john)

// sayHi(john)

// sayHi(peter)