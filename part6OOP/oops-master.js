// Encapsulation 

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
