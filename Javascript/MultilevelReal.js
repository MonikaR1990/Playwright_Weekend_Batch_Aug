class Customer           //Parent Class
{
    constructor(name, customerId)
    {
        this.name = name
        this.customerId = customerId
    }
    showCustmorerDetails()
    {
        console.log("Customer Name: " + this.name)
        console.log("Customer Id: " + this.customerId)
    }
}

class BankAccount extends Customer
{
    constructor(name, customerId, accountNumber, balance)
    {   
        super(name, customerId)
        this.accountNumber = accountNumber
        this.balance = balance
    }
    showBankAccountDetails()
    {
        super.showCustmorerDetails()
        console.log("Account Number: " + this.accountNumber)
        console.log("Balance: " + this.balance)
    }
}

let ba = new BankAccount("Bala", 101, 100001, 5000)
ba.showBankAccountDetails()

class SavingsAccount extends BankAccount
{
    constructor(name, customerId, accountNumber, balance, intersetRate)
    {
        super(name, customerId, accountNumber, balance)
        this.intersetRate = intersetRate
    }
    showSavingsBankAccount()
    {
        super.showBankAccountDetails()
        console.log("Interset Rate: " + this. intersetRate + "%")       
    }
}

let sa = new SavingsAccount("Mani", 197, 7687678, 8000, 12)
sa.showSavingsBankAccount()

//super keyword is used to access the parent class constructor and method

//super() -> call parent class constructor
//super.methodName() --> call the parent class methdod