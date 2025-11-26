// Encapsulation 

class BankAccount {
    #balance = 49253 ;

    deposit (amount) {
        this.#balance += amount ;
        return this.#balance ;
    }
    getBalance () {
        return `$ ${this.#balance}`;
    }
}

