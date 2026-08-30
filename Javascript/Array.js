//Array

let names = ["Bala", "Mohan", "Poorinam"]        //Array Litral Way declaraion

//Array is a datastrcuture which is used to store multiple data in a variable

let nums = new Array(1, 2, 3, 4, 5)  //Constructor Way

//Array is based on index. index starts from '0'

//To Access the Array Elements based on index
console.log(names[2])
console.log(names[0])
console.log(names[1])

//Add Elements in Array

let fruits = ["Mango", "Orange", "Apple"]

console.log(fruits)

fruits.push("Guva") //Add elements at the end of an Array

console.log(fruits)

fruits.unshift("Cherry") //Add the elements at the beginning of an Array

console.log(fruits)

//Remove the elements fro the Array

fruits.pop() //Remove the last element from an array

console.log(fruits)

fruits.shift()

fruits.shift()

console.log(fruits) //Remove the first element from an array

//Update Elements

fruits[0] = "Pine Apple"

console.log(fruits) 

//CRUD operation 

//Array main property (length) //numbers of elements available in the array

console.log(names.length)
console.log(nums.length)
console.log(fruits.length)

let listNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

for(let i = 0; i<listNumbers.length; i++)
{
    console.log(listNumbers[i])
}

//splice() which is used add, remove or replace elements from an Array. it affects the original array

let animals = ["Dog", "Cat", "Mouse", "Rat", "Cow"]

console.log(animals)

animals.splice(0, 2)

console.log(animals)

//1 => start index
//2 => how many elements need to remove 

animals.splice(0, 0, "Rabbit", "Deer") //add elements

//0 => start index
//0 => how many elements need to remove 

console.log(animals)

animals.splice(4, 0, "Donkey") //add

animals.splice(4, 1, "Donkey") //update

console.log(animals)

//slice() ==> this method used to extract the portion an array and return new Array (it will not affect the original array)

let birds = ["crow", "peacock", "hen", "cock"]

let newBirds = birds.slice(0, 3)

//1 => start index (Include)
//2 => end index (exclude)

console.log(newBirds)

//let sliceBirds = birds.slice(1)

let sliceBirds = birds.slice(-2)

console.log(sliceBirds)

console.log(birds)

//splice()
//1. Modifying the orignal by add, modify, remove elements from an array. Original array getting changed

//slice()
//It mainly extract the portion of an array and it do not change the original array

//concat()
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = arr1.concat(arr2)
console.log(arr3)

let course = ["Java", "JS", "Python", "C", "C++", "Java"]

console.log(course.includes("Java"))

console.log(course.indexOf("JS"))

console.log(course.indexOf("Java"))

console.log(course.lastIndexOf("Java"))

console.log(course.join("-"))

for(let i = 0; i<course.length; i++)
{
    console.log(course[i])
}

//for...of
for(let c of course)
{
    console.log(c)
}

//find

let num1 = [1, 2, 3, 4, 5]

let num2 = num1.find(x=>x>2) //Return the first match element

console.log(num2)

let num3 = num1.filter(x=>x>2)

console.log(num3) //Return all the matching elements from the array

let num4 = num1.map(x=>x*2) //Transform each elements of an array

console.log(num4)

console.log(course.map(x=>x.toUpperCase()))

console.log(course.filter(x=>x.length>3))


//Destructuring

let superHeros = ["Ironman", "Hulk", "Spiderman", "Batman", "Captain America"]

//Destruring means extracting values from an array and assiging them to variable

//Before Destucting

// const s1 = superHeros[0]
// const s2 = superHeros[1]
// const s3 = superHeros[2]
// const s4 = superHeros[3]
// const s5 = superHeros[4]

// console.log(s5)

let [s1, s2, s3, s4, s5] = superHeros

console.log(s1)

let [c1, c2, c3, c4, c5] = course

console.log(c5)

let array1 = [1, 2, 3]

let array2 = [...array1, 4, 5, 6] //spread operator

console.log(array2)

let array3 = [...array2, 7, 8 ,9]

console.log(array3)

let array4 = [0, ...array1, ...array2, ...array3]

console.log(array4)

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [m1, m2, m3,...remaining] = myArray //destructing //rest operator]

console.log(m3)
console.log(remaining)

//It collects the remaining values and stored into a variable

//Rest = Collect ...
//Spred = Expand ...












