//Poly = Many
//Morph = Form

//Two Types
//Method Overloading (Compile Time Ploymorphism) --> not support in Javascript
//Method Overriding (Run Time Ploymorphism) 

// class Sum
// {
//     add(a, b)
//     {
//         console.log(a+b)
//     }
//     add(a, b, c)
//     {
//         console.log(a+b+c)
//     }
//     add(a, b, c, d)
//     {
//         console.log(a+b+c+d)
//     }
// }

// let s = new Sum()
// s.add(10, 30)

//Method Overriding

class Animal
{
    sound()
    {
        console.log("Animal Makes Sound")
    }
}

class Dog extends Animal
{
    sound()
    {
       console.log("Barking") 
    }
} 
class Cat extends Animal
{
    sound()
    {
        console.log("Meowing")
    }
}
class Lion
{
    sound()
    {
        console.log("Roaring")
    }
}

let a

a = new Animal()
a.sound()

a = new Dog()
a.sound()

a = new Cat()
a.sound()

a = new Lion()
a.sound()

class Payment
{
    pay(amount)
    {
        console.log("Processing Amount " + amount)
    }
}

class UPI extends Payment
{
    pay(amount)
    {
        console.log("Paid " + amount + " using UPI ID")
    }
}

class CreditCard
{
    pay(amount)
    {
        console.log("Paid " + amount + " using Credit Card")
    }
}

let p

p = new Payment()
p.pay(5000)

p = new UPI()
p.pay(5000)

p = new CreditCard()
p.pay(5000)