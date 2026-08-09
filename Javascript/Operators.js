//Operators

//Arithmetic Operator (+, -, *, /, %)
//Assignment Operator (=, +=, -=, *=, /=)
//Comparision Operator (==, ===, !=, !==, <, >, <=, >=)
//Logical Operator (&&, ||, !)
//Unary Operator (+, -, ++, --)
//String Operator (+)
//Ternary Operator () 
//typeOf Operator

let a = 10
let b = 20

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

let c = 10 //assignmment

c += 5; //c = c + 5 //15

c -= 5 //c = c - 5  //10 

c *= 5 // c = c * 5

c = c * 5

//c = c/2

c /= 2


console.log(c)

let NAME = "Bala_1234"

console.log(NAME)

console.log(5=="5")

console.log(6==7)

console.log(5==="5") //strict equal

console.log(5!="5")

console.log(5!=="5") //not strict equal

console.log(5<5)

console.log(5<=5)

console.log(5>=4)

console.log((5=="5") && (5==="5"))

console.log((5==="5") || (5=="5"))

console.log(!true) //! not operator

let isPresent = true

console.log(!isPresent)

console.log(!5)

console.log(!-5)

console.log(!0)

console.log(!"Hello")

console.log(!undefined)

console.log(!null)

console.log(!NaN)


let x = 5

console.log(x++) //post increment // x = 6

console.log(x--) //post decrement // x = 5

console.log(++x) //Pre increment // x = 6

console.log(--x) //pre decrement // x = 5


// let num1 = 10
// let num2 = "ten"

// console.log(num1 + num2)

let age = 17
let hasVoterId = true

let status = ((age>=18) && (hasVoterId)) ? "Eligible" : "Not Eligible"
console.log(status)

let num1 = 10
let num2 = 5

let result = (num1>num2) ? num1+num2 : num1-num2
console.log(result)

let z;

console.log(typeof(result))
// console.log(typeof(status))
// console.log(typeof(hasVoterId))
// console.log(typeof(z))




// console.log(5!=="5")