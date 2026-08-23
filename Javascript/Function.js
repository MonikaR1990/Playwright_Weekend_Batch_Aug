//Function is block of reusable code that performs specific task

greet()

//console.log("Welcome")

//function definition
function greet()
{
    console.log("Welcome! Everyone! Have a nice day!")
} 

greet()  //function call
greet() //Function without parameter

function add(a, b)
{
    console.log(a+b)
}

add(10, 20) //argument pass

add(50, 50)

function login(username, password)
{
    if(username === "Admin" && password === "1234")
    {
        console.log("Login Successful")
    }
    else
    {
        console.log("Login Failed")
    }
}

login("Admin", 1234)

//function creation ==> parameter
//function calling ==> arguments

function greetings(name)
{
    console.log("Hello", name)
}

greetings("Mohan")

function add(a, b)
{
    console.log(a+b)
}

let c = add(10, 30) + 10
console.log(c)



function sum(a, b)
{
    return a+b
}

let d = sum(10, 30)
console.log(d)

//console.log(sum(10, 30) + 10) //40

/*
void  --> function performs an action
console.log() display something

return --> function perfirms a value back
return keyword 
*/


function placeOrder(menu)
{
    console.log("Cooking...")
    console.log("Order Placed: " + menu)
}

placeOrder("Pizza")

function getFoodPrice(amount)
{
    return amount
}

let price = getFoodPrice(400)
console.log(price)

console.log(getFoodPrice(400))

// function calculateSalary(basic, hra, allowance)
// {
//     let salary = basic+hra+allowance
//     console.log(salary)
// }

// calculateSalary(20000, 5000, 5000) + 5000

function calculateSalary(basic, hra, allowance)
{
    let salary = basic+hra+allowance
    return salary
}

let updatedSalary = calculateSalary(20000, 5000, 5000) + 5000
console.log(updatedSalary)

console.log(calculateSalary(20000, 5000, 5000) + 5000)

//let username = "Mani" //global varibble

function checkLogin()
{
    let username = "Admin" //local variable

    console.log(username)
    
}

//checkLogin()

//console.log(username)


// function test()
// {
//     var x = 10

//     if(true)
//     {
//         console.log(x)
//     }
//     console.log(x)
// }

// test()

function test()
{
    if(true)
    {
        var x = 10
        var y = 20
    }
    console.log(x)
    console.log(y)
}
test()

let browser = "chrome" //Global variable / scope



function newLogin()
{
    let user = "admin"
    console.log(user)     //local scope
}

newLogin()

function launchBrowser()
{
    console.log(browser)
    newLogin()
}

launchBrowser()

console.log(user)


