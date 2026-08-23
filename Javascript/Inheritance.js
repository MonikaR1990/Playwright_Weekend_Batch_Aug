//Inheritance

//Inheritance means one class can acquire the properties and mthods of another class using extends Keyword

class Animal              //Parent Class
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal             //Child Class
{
    constructor()
    {

    }
    bark()
    {
        console.log("Barking")
    }
}

let d = new Dog()
d.bark()
d.eat()
d.sleep()

let a = new Animal()
a.eat()
a.sleep()


//Inheritance have 4 types
//1. Single Inheritance --> 1 parent and 1 Child
//2. Multilevel InheritanceMultiLevel.js
//3. Hierarchical Inheritance
//4. Hybrid Inheritance