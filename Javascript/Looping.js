//Looping Statements

// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")

//Loop means executes block of code repeatedly until the condition becomes false

//for
//while
//do-while

// for(initilization; condition; increment/decrement)
// {
//     //code
// }

// let name = "Bala"
// console.log(name)

// for(let i = 1; i<=5; ++i)
// {
//     console.log(i)
// }

// for(let i = 1; i<5; ++i)
// {
//     console.log(i)
// }

// for(let i = 2; i<=20; i+=2)
// {
//     console.log(i)
// }

// for(let i = 1; i<=20; i+=2)
// {
//     console.log(i)
// }

// for(let i = 5; i>=1; i--)
// {
//     console.log(i);
// }

// let num = 5;
// for(let i = 1; i<=10; i++)
// {
//     console.log(i , "X" , num , "=" , (i*num))
// }

// let str = "Welcome"
// let rev = ""

// for(let i = str.length-1; i>=0; i--)
// {
//     rev += str[i]  //rev = rev + str[i]
    
// }

// console.log(rev)
 
/*
    rev = rev + str[i]
    i = 6 ;  6>=0;  rev=""+str[6]  rev = e
    i = 5 ;  5>=0;   rev=e + str[5]  rev = em
    i = 4 ;  4>=0;   rev = em + str[4]  rev= em + o ==> emo
    i = 3 ;  3>=0;   rev = emo + str[3] rev = emo + c ==> emoc
    i = 2 ;  2>=0;   rev = emoc + str[2] rev = emoc + l ==> emocl
    i = 1 ;  1>=0    rev = emocl + str[1]  rev = emocl + e ==> emocle
    i = 0;   0>=0;   rev = emocle + str[0]  rev = emocle + W ==> emocleW
    i = -1;  -1>=0   


*/

// let num = 12345
// let rev = ""

// for(let i = String(num).length-1; i>=0; i--)
// {
//     rev += String(num)[i]  //rev = rev + str[i]
    
// }
// console.log(rev)

let num = 12345
let rev = 0;

for(; num > 0; num = Math.floor(num/10)) 
{
    let digit = num % 10
    rev = rev * 10 + digit
}
 
console.log(rev)

/*

12345 > 0 
let digit = 5
rev = 0 * 10 + 5  ==> rev = 5

12345/10  ==> 1234.5  num = 1234

1234 > 0;
let digit = 1234 % 10  ==> 4
rev = 5*10 + 4 ==>54

1234/10 ==> 123.4 ==> 123

123>0
let digit = 123%10 ==> 3
rev = 54 * 10 + 3 ==> 543

123/10 ==> 12.3 ==> 12

12>0
let digit = 12%10 ==> 2
rev = 543 * 10 + 2 ==> 5432

12/10 ==> 1.2 ==> 1

1>0
let digit = 1%10 ==> 1
rev = 5432 * 10 + 1 ==> 54321

1/10 

*/

let str1 = "JavaScript"

let reverse = str1.split("").reverse().join("@")

console.log(reverse)