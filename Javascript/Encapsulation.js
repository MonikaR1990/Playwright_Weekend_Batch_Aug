class BankAccount
{
    #balance

    constructor(accountNumber, balance)
    {   
        this.accountNumber = accountNumber
        this.#balance = balance
    }

    withdraw(amount)
    {
        if(amount<=this.#balance)
        {
            this.#balance -= amount
        }
        else
        {
            console.log("Insufficent Balance")
        }
    }
    deposit(amount)
    {
        this.#balance += amount   
    }

    getBalance()
    {
        console.log(this.#balance)
    }
}

let acc = new BankAccount(77777, 5000)
acc.getBalance()
acc.deposit(5000)
acc.getBalance()
acc.withdraw(7000)
acc.getBalance()