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

class Dog extends Animal         
{
    bark()
    {
        console.log("Barking")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

let p = new Puppy()
p.eat()
p.sleep()
p.bark()
p.play()