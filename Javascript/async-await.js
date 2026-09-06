function login()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("1. Login Successful")
            resolve()
        })
    })
}

function searchTrain()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("2. Train Found")
            resolve()
        }, 2000);
    })
}

function selectSeat()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("3. Seat Selected")
            resolve()
        }, 2000);
    })
}

function pay()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("4. Payment Successfull")
            resolve()
        }, 2000)
    })
}

function getTicket()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("5. Ticket Downloaded")
            resolve()
        }, 2000)
    })
}

//Promise Handle then() and catch()

// login()
//     .then(()=>searchTrain())
//     .then(()=>selectSeat())
//     .then(()=>pay())
//     .then(()=>getTicket)
//     .then(()=>console.log("Train Ticked Booked"))
//     .catch(error=>console.log(error))

//async await

//another way to handle the Promise 

async function bookTrainTicket()
{
    await login()
    await searchTrain()
    await selectSeat()
    await pay()
    await getTicket()

    console.log("6. Train Ticket booked")
}

//bookTrainTicket()

//async ==> a function that conatain an asynchronus process (promise) that always return a promise
//await ==> Wait until the Promise is completed, then give us the result

function loginAs(username, password)
{   
    return new Promise((resolve, reject)=>{
        if(username === "Admin" && password === "Admin@123")
        {
            resolve("Login Successful")
        }
        else
        {
            reject("Login Failed")
        }
    })
}

async function checkLogin()
{
    try
    {
        const result = await loginAs("Admin", "Admin@123")
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
    
}

//checkLogin()


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

async function checkInterviewStatus()
{
    try
    {
        const result = await interviewProcess(85)
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
    
}

//checkInterviewStatus()


function otpVerify(otp)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(otp==="12345")
            {
                resolve("OTP Verified")
            }
            else
            {
                reject("Invalid OTP")
            }
        },3000)
    })
}

async function checkOtp()
{
    try
    {
        const result = await otpVerify("12345")
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

checkOtp()