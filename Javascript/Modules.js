export function add(a, b)
{
    console.log(a+b)
}

export function sub(a, b)
{
    console.log(a-b)
}

export function mul(a, b)
{
    console.log(a*b)
}

export function div(a, b)
{
    console.log(a/b)
}

export function greet(name)
{
    console.log("Hello " + name)
}

add(6, 9)

export let schoolName = "ABC School"

export let fruits = ["Apple", "Orange", "Pine Apple"]

export let student = {
    name: "Bala",
    age: 22,
    id: 101
}

console.log(schoolName)


export class Employee
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

// const pi = 3.14

// export default pi

export default function sayHi()
{
    console.log("Say Hi...")
}

