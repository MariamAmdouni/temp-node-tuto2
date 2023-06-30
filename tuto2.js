//Modules
// I will execute one file but i will split my code 
// Encapsulated code (Only share minimum)
//Every file in node is a module 
require('./tuto2-mind-grenade')
const {john,peter} = require('./tuto2-names') 
const sayHi = require('./tuto2-functions')
const data = require('./tuto2alternative')
console.log(data)

// sayHi('suzan')
// sayHi(john)
// sayHi(peter)