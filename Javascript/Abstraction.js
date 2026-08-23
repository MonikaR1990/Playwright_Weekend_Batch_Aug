//Abstraction 

//Hiding the internal implementation details and showing only the neccessary functionalities to th user

function calculateTotalPrice(price, quantity)
{
    let total = price * quantity
    console.log(total)
}

calculateTotalPrice(100, 5)

function login(username, password)
{
    validateUserName(username)
    validatePassword(password)
    console.log("Login Successfully")
}

function validateUserName(usernmae)
{
    console.log(usernmae + " Username Validated")
}

function validatePassword(password)
{
    console.log(password + " Username Validated")
}

login("Poornima", "poornima@123")

class Car
{
    start()
    {
        this.#checkEngine()
        console.log("Car Started")
    }
    #checkEngine()         //# -- private
    {
        console.log("Checking Engine")
    }
}

let c = new Car()
c.start()

class Order
{
    placeOrder()
    {
        this.#validateProduct()
        this.#processPayment()
        console.log("Order Placed")
    }


    #validateProduct()
    {
        console.log("Product Available")
    }
    #processPayment()
    {
        console.log("Payment Completed")
    }
}

let o = new Order()
o.placeOrder()