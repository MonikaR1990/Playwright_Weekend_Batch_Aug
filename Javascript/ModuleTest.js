import {add, sub, mul, div} from './Modules.js'
import { greet } from './Modules.js'
import { schoolName, fruits, student } from './Modules.js'
import sayHi from './Modules.js'
import { Employee } from './Modules.js'
// import { sub } from './Modules.js'
// import { mul } from './Modules.js'
// import { div } from './Modules.js'

add(5, 5)
greet("Mohan")
sub(10, 5)
mul(10, 4)
div(25, 5)

console.log(schoolName)
console.log(fruits)
console.log(student)


let emp = new Employee("Bala", 101)
emp.display()

// let r = 5
// console.log(pi*r*r)

sayHi()