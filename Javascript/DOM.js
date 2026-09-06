//DOM
//Document Object Model

let heading = document.getElementById("title")
console.log(heading.textContent)


function changeText()
{
    heading.textContent="Hello JavaScript"
}

console.log(heading.textContent)

const pass = document.getElementById("password")
console.log(pass.className)

const input = document.getElementsByClassName("input")
console.log(input[0].id)

