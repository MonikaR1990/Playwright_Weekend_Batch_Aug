//Super set of JavaScript

//TypeScript = JavaScript + Type Safety
//Find Errors Early
//User large Projects
//Work well with Playwright

let sname = "Ram"

sname = 10

console.log(sname)

//TypeScript only performs on Compile Time 
//While Run ts file it converted to JavaScript

/*
    Demo.ts
    |
    TypeScript Checking (Compile)
    |
    JavaScript (Run Time)
    |
    Node.js executes it

*/

//Variable Declaration

let name1: string = "Raj"

//name1 = 10
let age: number = 10

let isActive: boolean = true

let population1: bigint = 100007878789798n

console.log(population1)

//Compile Time Error handled by TypeScript

//Run time Error handled by JavaScript


//Important Types in TypeScript
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. any
//7. unknown
//8. void 
//9. never
//10. object
//11. Array Type
//12. Tuple Type
//13. Type 
//14. Interface
//15. Union Type

let isLoggedIn: null = null

let value: undefined = undefined

console.log(value)

let x: undefined = undefined

console.log(x)

console.log("Welome")

let data: any = "Hello"

// let studentName: any = "Raghu"
// let salary: any = true

data = 10
data = true
data = null

//console.log(data.toUpperCase())


//any type allows any values

//unknown

let data1: unknown

data1 = "Hello"
data1 = 100
data1 = true


//console.log(data1.toUpperCase())

//Operators
/*
Arithmetic
Assignment
Comparision
Logical
Unary
Ternary
String
typeOf */

for(let i: number = 1; i<=5; i++)
{
    console.log(i)
}

let fruits: string[] = ["Orange", "Apple", "Mango"]

fruits.push("Guva")
fruits.push(200)

console.log(fruits)

let numbers: number[] = [1, 2, 3, 4, 5] 
numbers.unshift(0)

let dataSet = ["Day", true, 1001, "Price", "range", 2009] //tuple

//push()
//unshift()
//shift()
//pop()
//splice()
//slice()
//find()
//filter()
//map()
//reduce()
//concat()
//join()
//includes()
//indexOf()
//lastIndexOf()

//length

let nums = new Array(1, 2, 3, 4, 5)

for(let n of nums)
{
    console.log(n)
}

//Obejct
// let user = {
//     name: "Raj",
//     age: 22,
//     id: 101
// }

let user: {
    name: string
    age: number
    id: number
    city: string
} = {
    name: "Bala",
    age: 12,
    id: 101,
    city: "Trichy"
}

let person: {
    name: string,
    id: number
} = {
    name: "Banu",
    id: 101
}

function add(a: number, b: number)
{
    console.log(a+b)
}

add(23, 11)

function greet(name: string)
{
    console.log("Hello " + name)
}

//class is consists of properties (variables) and methods (functions)
//constructor is special method which is used to initialize the object values 
// 

export let schoolName: string = "ABC School"   //Gobal varialbe

export class Student
{
    name: string   //gowtham          //Instance Variable
    id: number
    age: number
    constructor(sname:string , sid: number, sage: number) //local variable
    {
        this.name = sname
        this.id = sid
        this.age = sage  
    }
    display()
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.age)
        console.log(schoolName)
    }
}

class Employee
{
    name: string             //Instance Variable
    id: number
    salary: number
    dept: string
    constructor(ename: string, eid: number, esalary: number, edept: string)
    {
        this.name = ename             //local variable
        this.id = eid
        this.salary = esalary
        this.dept = edept
    }
    displayEmpDetails(): void
    {
        console.log(`Employee Name: ${this.name}`)
        console.log(`Employee ID: ${this.id}`)
        console.log(`Employee ID: ${this.dept}`)
    }
    displayEmpSalary(): void
    {
        console.log(`Employee Name: ${this.name}`)
        console.log(`Employee ID: ${this.id}`)
        console.log(`Employee Salary: ${this.salary}`)
    }
}

let emp1 = new Employee("Ram", 101, 25000, "Accounts")
console.log("==================")
emp1.displayEmpDetails()
console.log("==================")
emp1.displayEmpDetails()
console.log("==================")

class Person
{
    name: string
    age: number
    constructor(name: string, age: number)
    {
        this.name = name
        this.age = age
    }
    display(): void
    {
        console.log(`Employee Name: ${this.name}`)
        console.log(`Employee Age: ${this.age}`)
    }
}
class Employees extends Person
{
    id: number
    constructor(name:string, age: number, id: number)
    {
        super(name, age)
        this.id = id   
    }
    displayEmployeeDetails(): void
    {
        super.display()
        console.log(`Employee id: ${this.id}`)
    }
}
class Manager extends Employees
{
    dept: string
    constructor(name: string, age: number, id: number, dept: string)
    {
        super(name, age, id)
        this.dept = dept
    }
    displayManagerDetails(): void
    {
        super.displayEmployeeDetails()
        console.log(`Employee Department: ${this.dept}`)
    }
}

//super(variable)--> call the parent class constructor properties
//super.method() --> call the parent class methods

let manager = new Manager("Ram", 33, 178, "Admin")
manager.displayManagerDetails()

//Abstraction
//Hiding the internal implementation details and showing only the neccessary features to the users

//Abstraction achived in 2 ways
//1. abstract class
//2. Interface

abstract class Animal
{
    abstract sound(): void    //abstract method without implementation

    sleep(): void             //Normal method with implementation //concrete method
    {
        console.log("Sleeping")
    } 
}
class Dog extends Animal
{
   sound(): void {
       console.log("Barking")
   }
   sleep(): void {
       console.log("Dog is sleeping")
   }
}
class Cat extends Animal
{
    sound(): void {
        console.log("Meow")
    }
}
class Lion extends Animal
{
    sound(): void {
        console.log("Roaring")
    }
} 

let a

a = new Dog()
a.sound()

a = new Cat()
a.sound()


a = new Lion()
a.sound()



//an abstract class have atleaset one abstract method
//an abstract doesn't have a body that means { implementation }
//an abstract class have both an abstract and normal method
//we can't create object for an abstract class


//Polymorphism
//method overloading (not in both JavaScript and TypeScript)
//method overriding

// class Addition
// {
//     add(a: number, b:number)
//     {
//         console.log(a+b)
//     }
//     add(a: number, b: number, c: number)
//     {
//         console.log(a+b+c)
//     }
//     add(a: number, b: number, c: number, d: number)
//     {
//         console.log(a+b+c+d)
//     }
// }

//Interface

//Interface and Class
interface NewAnimal
{
    sound(): void //abstract method
    eat(): void

    // eat() //normal method not allowed
    // {
    // }
}

class NewDog implements NewAnimal
{
    sound(): void {
        console.log("Barking")
    }
    eat(): void
    {
        console.log("Eat Cookies")
    }
}
class NewCat implements NewAnimal
{
    sound(): void {
        console.log("Meow")
    }
    eat(): void
    {
        console.log("Drink milks")
    }
}
class NewLion implements NewAnimal
{
    sound(): void {
        console.log("Roar")
    }
    eat(): void
    {
        console.log("Eat Bones")
    }
}

let b

b = new NewDog()
b.sound()

b = new NewCat()
b.sound()

b = new NewLion()
b.sound()


//interface only allows abstract method (without implemetation or body)
//we can't create 

// websriver driver = new ChromeDriver()

//Interface achive 100% abstraction 

//Interface with Object
interface Students
{
    name: string
        id: number
    course: string
    city?: string           //optional property

    display(): void
}

let student1: Students = {
    name: "Sakthi",
    id: 101,
    course: "Software Testing",
    city: "Trichy",

    display(): void
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.course)
        console.log(this.city)
    }

}

//Interface with Array of Objects
interface Persons
{
    name: string
    id: number
}

let newperson: Persons[] = [
    {name: "Poornima", id: 1010},
    {name: "Sakthi", id: 1011},
    {name: "Mohan", id: 1012}
]

//let vegies: string[] = ["Carrot", "Beans"]

interface camera
{
    takePhoto(): void
}
interface mobile
{
    makeCall(): void
    makeMessage(): void
}
interface fm
{
    hearSongs(): void
}

class AndriodPhone implements camera, mobile, fm
{
    takePhoto(): void {
        console.log("Using Camera Take Photo")
    }
    makeCall(): void {
        console.log("Make Calls")
    }
    makeMessage(): void {
        console.log("Make Message")
    }
    hearSongs(): void {
        console.log("Hearing Songs")
    }
} 

interface TestCase
{
    testName: string
    browser: string
}

interface AutomationTest extends TestCase
{
    framework: string
    exeutionTime: number
}

let test: AutomationTest = {
    testName: 'Login Test',
    browser: "Chrome",
    framework: "Playwright/Cucumber BDD",
    exeutionTime: 10   
}
