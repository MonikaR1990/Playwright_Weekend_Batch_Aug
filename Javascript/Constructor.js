class Student
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    displaySyudenDetails()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

let s1 = new Student("Bala", 101)
s1.displaySyudenDetails()

let s2 = new Student("Meena", 102)
s2.displaySyudenDetails()


//Constructor is a special method that is automatically called when an object is created using new Keyword
//It is mainly used to initialize the object properties

//Pascal Case -> Word 1st Capital (Class, Interface, Enum)

class Employee
{
    constructor(ename, eid, salary)      //Parameterized Constructor
    {
        this.ename = ename
        this.eid = eid
        this.salary = salary
    }
    displayEmployeeDetails()
    {
        console.log(this.ename)
        console.log(this.eid)
        console.log(this.salary)
    }
}

let emp = new Employee("Bala", 102, 45000)
emp.displayEmployeeDetails()

console.log(emp)