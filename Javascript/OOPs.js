//OOPS

//Class
//Object

//Inheritance
//Polymorphism
//Abstraction
//Encapsulation

//Class

//A class is a blueprint/template for creating objects. It also consists properities (variables) and methods (function)

//class == blueprint
//Object = Actual thing created from the blueprint

class Hotel
{
    tea = 15
    coffee = 20

    display()
    {
        console.log(this.tea)
        console.log(this.coffee)
    }
}

let server = new Hotel()

console.log(server.tea)
console.log(server.coffee)

server.display()

//this --> this keyyword refer the current object


class Welcome
{
    constructor()
    {                          //default constructor

    }
    displayMessgae()
    {
        console.log("Welcome EveryOne....")
    }
}

let wel = new Welcome()

wel.displayMessgae()






