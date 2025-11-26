// Encapsulation 
/*
class BankAccount {
    #balance = 49253 ;

    deposit (amount) {
        this.#balance += amount ;
        return this.#balance ;
    }
    getBalance () {
        return `Rs ${this.#balance}`;
    }
}
let account = new BankAccount () ; 

console.log(account.getBalance())
*/

function BankAccount(accountNumber, accountHolderName, balance) {
    let _accountNumber = accountNumber;
    let _accountHolderName = accountHolderName;
    let _balance = balance;

    function showAccountDetails() {
        console.log(`Account Number: ${_accountNumber}`);
        console.log(`Account Holder Name: ${_accountHolderName}`);
        console.log(`Balance: ${_balance}`);
    }

    function deposit(amount) {
        _balance += amount;
        showAccountDetails();
    }

    function withdraw(amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }

    return {
        deposit: deposit,
        withdraw: withdraw
    };
}

let myBankAccount = BankAccount("54400100008011", "Sanjay Singh", 50753);

myBankAccount.deposit(500); 
// Output: Account Number: 123456 Account Holder Name: 
//John Doe Balance: 1500

myBankAccount.withdraw(2000); // Output: Insufficient Balance