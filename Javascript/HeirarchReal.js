class Person         //Parent Class
{
    constructor(name, age, id)
    {
        this.name = name
        this.age = age
        this.id = id
    }
    showDetails()
    {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("ID: " + this.id)
    }
}

class Doctor extends Person
{
    constructor(name, age, id, specialization)
    {
        super(name, age, id)
        this.specialization = specialization
    }
    displayDoctorDetails()
    {
        super.showDetails()
        console.log("Specialization: " + this.specialization)
    }
}

class Nurse extends Person
{
    constructor(name, age, id, shift)
    {
        super(name, age, id)
        this.shift = shift
    }
    displayNurseDetails()
    {
        super.showDetails()
        console.log("Shift Details: " + this.shift)
    }
}

class Patient extends Person
{
    constructor(name, age, id, disease)
    {
        super(name, age, id)
        this.disease = disease
    }
    displayPatientDetails()
    {
        super.showDetails()
        console.log("Disease: " + this.disease)
    }
}

