//Object


// let student = {             //literal way
//     name: "Bala",
//     id: 101,
//     age: 15
// } 
 

let person = new Object()  //Constructor way
person.pname = "Mani"
person.pid = 1001
person.city = "Trichy"

console.log(person)

let employee = {
    ename: "Latha",
    eid: 101,
    esalary: 50000,
    address:
    {
        city: "Trichy",       //Nested Object
        state: "Tamilnadu"
    },
    display()
    {
        console.log(this.eid)
        console.log(this.ename)        
    },
    skills: ["Java", "JS", "Python"] //Object with in Array
}

console.log(employee)
console.log(employee.ename)   //dot notation
console.log(employee.eid)
console.log(employee.esalary)

console.log(employee["eid"]) //Bracket Notation
console.log(employee["ename"])
console.log(employee["esalary"])

employee.eid = 102 //Modifying Propety values of the Object
console.log(employee)

employee.eage = 33 //Adding Properities to the Object

console.log(employee) 

delete employee.eage; 

console.log(employee) 

console.log(employee.address.state)

employee.display()

console.log(employee.skills[1])

//Array of object 

let phone = [
    {name: "Vivo", price: 18000},
    {name: "Realme", price: 15000},
    {name: "Samsung", price: 22000}
]

console.log(phone[1].price)

console.log(phone[1])

let student = {             
    name: "Bala",
    id: 101,
    age: 15
} 
 
let {name, id, age} = student

console.log(name)
console.log(id)
console.log(age)

//Destruring means extracting values from an object and assiging them to variable

let obj1 = {a: 1, b: 2}

let obj2 = {
    ...obj1,                   //spread operator
    c: 3,
    d: 4
}

console.log(obj2)

let obj3 = {e:5, f:6}

let newObj = Object.assign({}, obj2, obj3)

console.log(newObj)

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

// Object.freeze(student)
// // student.mark = 100

// delete student.id

// console.log(student)

Object.seal(student)

student.age = 10 //modify

student.mark = 100 //no add

delete student.age //no delete

 console.log(student)

 for(let key in student)
 {
    console.log(key)
 }

for(let key in student)
 {
    console.log(student[key])
 }