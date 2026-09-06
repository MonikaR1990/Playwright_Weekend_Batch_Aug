//Promise is an Object that represents an eventual result (resolve, reject) of an asynchronous process

//Promise has 3 states
//1. Pending
//2. Fullfilled (resolved)
//3. Rejected

// let myPromise = new Promise((resolve, reject)=>{

//     let isDriverAvailable = false
//     setTimeout(()=>{
//         if(isDriverAvailable)
//         {
//             resolve("Ride Booked")
//         }
//         else
//         {
//             reject("Ride Cancelled")
//         }
//     }, 3000)
// })

// myPromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


// function login(username, password)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(username === "Admin" && password === "Admin@123")
//             {
//                 resolve("Login Successful")
//             }
//             else
//             {
//                 reject("Login Failed")
//             }
//         }, 3000)
//     })
// }


// login("Admin", "Admin@123")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

    //resolve() --> then() 
    //     | --> Promise Fullfilled 
    //              --> value = "Login Successful"
    //                      -->then() receive the value
    //                              --> .then(result=>console.log(result))

/*    
Login
    |
User enters username, password
    |
Promise
    |
Pending
    |     |
success  Failure

*/

// function otpVerify(otp)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(otp==="12345")
//             {
//                 resolve("OTP Verified")
//             }
//             else
//             {
//                 reject("Invalid OTP")
//             }
//         },3000)
//     })
// }

// otpVerify("12345")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


// function otpVerify(otp)
// {
//         setTimeout(()=>{
//             if(otp === "12345")
//             {
//                 return "OTP Verified Successfully"
//             }
//             else
//             {
//                 return console.log("Invalid OTP")
//             }
//         },3000)
// }

// console.log(otpVerify("12345"))


function interviewProcess(canditateScore)
{
    return new Promise((resolve, reject)=>{
        
        console.log("HR: You Interview is Completed")

        console.log("HR: We will update your status in 3 days")

        setTimeout(()=>{
           if(canditateScore>80)
            {
                resolve({
                    status: "Selected",
                    company: "TCS",
                    role: "Software Test Engineer",
                    salary: 50000
                })
            }
            else
            {
                reject("Sorry!! Another candidate matched our requirements")
            }
        }, 5000)
    })
}

interviewProcess(85)
    .then(result=>{
        console.log("Congratulations")
        console.log(result.status)
        console.log(result.company)
        console.log(result.role)
        console.log(result.salary)
    })
    .catch(error=>console.log(error))

//     let result = {
//     status: "Selected",
//     company: "TCS",
//     role: "Software Test Engineer",
//     salary: 100000
// }
// console(result.status)        