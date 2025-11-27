class Employee {
    constructor(name, salary) {
        this.name = name ;
        this._salary = salary ;
    }

    get salary () {
        return `You are not allowed to see salary`
    }

    set salary (value) {
        if(value < 0) {
            console.error("Invalid Salary")
        }else (
            this._salary = value 
        )
    }
}

let emp = new Employee("JOHN DEU" , -49230)
console.log(emp.salary);