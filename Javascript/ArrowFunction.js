// function greet()
// {
//     console.log("Hello")
// }

// greet()

let greet = ()=>console.log("Hello") //anonymous function
greet()

let add = (a, b)=>console.log(a+b)

add(5, 6)

let displayName = ename=>console.log(ename)

//let displayName = (ename)=>console.log(ename)

displayName("Mohan")


let  calculateSalary = (basic, hra, allowance)=>
{
    let salary = basic+hra+allowance
    return salary
}

let salary = calculateSalary(50000, 10000, 3000) 
console.log(salary)

let  placeOrder = menu =>
{
    console.log("Cooking...")
    console.log("Order Placed: " + menu)
}

placeOrder("Pongal")

//const sum = (a, b) => a + b //Implicit Return 

const sum = (a, b) => {       //Explicit Return
    return a + b  
}

//Implicit Return
//Explicit Return

let c = sum(5, 10)
console.log(c)


// sayHello()

// function sayHello()
// {
//     console.log("Hi Hello...")
// }

// sayHello()

//sayHello()

let sayHello = ()=>console.log("Hi Hello")

//sayHello()


let goodMorning = ()=>
{
    sayHello()
    console.log("Good Morning...")
}

goodMorning()

let squareRoot = x => x*x

console.log(squareRoot(5))

