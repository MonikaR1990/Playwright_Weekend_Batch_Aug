//Control Statements or Flow
//1. Conditional Statements
//2. Looping Statements (or) Iteration Process
//3. Jumping Statements

//Conditional Statements
//1. Simple if
//2. if...else
//3. else..if ladder
//4. Nested if

// if(condition)
// {
//     //code
// }


if(5=="5")
{
    console.log("Hello")
}





// else
// {
//     console.log("Hi")
// }



//Multiple condition 
// let mark = 45

// if(mark>=90 && mark<=100)
// {
//     console.log("A Grade")
// }
// else if(mark>=75 && mark<=89)
// {
//     console.log("B Grade")
// }
// else if(mark>=60 && mark<=74)
// {
//     console.log("C Grade")
// }
// else if(mark>=50 && mark<=59)
// {
//     console.log("D Grade")
// }
// else if(mark>=35 && mark<=49)
// {
//     console.log("E Grade")
// }
// else
// {
//     console.log("Fail")
// }


// let amount = 500

// if(amount>=10000)
// {
//     console.log(20% Discount)
// }
// else if(amount>=5000)
// {
//     console.log("10% Discount")
// }
// else if(amount>=2000)
// {
//     console.log("5% Discount")
// }
// else
// {
//     console.log("No Discount")
// }


// let username = "Admin"
// let password = "123"

// if(username === "Admin" && password === 123)
// {
//     console.log("Login Scuccessfull")
// }
// else
// {
//     console.log("Login Invalid")
// }

// let age = 17
// let citizen = "American"
// let hasVoterId = false

// if(17>=18)
// {
//     if(citizen==="Indian")
//     {
//         if(hasVoterId)
//         {
//             console.log("Able to Vote")
//         }
//         else
//         {
//             console.log("Not able to vote")
//         }
//     }
//     else
//     {
//         console.log("For Voting Process should be Indian")
//     }
// }
// else
// {
//     console.log("Not Eligible for vote")
// }

let loggedIn = true
let stockAvailable = true
let amount = 7000

if(loggedIn)
{
    if(stockAvailable)
    {
        if(amount >= 10000)
        {
            console.log("30% Discount")
        }
        else if(amount >= 5000)
        {
            console.log("20% Discount")
        }
        else if(amount >= 2000)
        {
            console.log("10% Discount")
        }
        else
        {
            console.log("No Discount")
        }
    }
    else
    {
        console.log("Product is out of stock")
    }
}
else
{
    console.log("Please Login First")
}

//switch

let day = 8

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Number")
}

let status = "Shipped"

switch(status)
{
    case "Placed":
        console.log("Order has been Placed")
        break
    case "Shipped":
        console.log("Order is on the way")
        break
    case "Delivered":
        console.log("Order Delivered")
        break
    case "Cancelled":
        console.log("Order Cancelled")
        break
    default:
        console.log("Invalid order status")
}

let num1 = 20
let num2 = 10

let op = "/" 

switch(op)
{
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1+num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
    default:
        console.log("Wrong Operator")
}
