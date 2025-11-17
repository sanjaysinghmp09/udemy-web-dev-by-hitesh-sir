// Simple Function declaration
function greet (name){
    console.log(`Hello ${name}`);
}
greet('Sanjay')

function Person (name , age){
    this.name = name 
    this.age = age 
    console.log("Working first Person")
}
Person("Sanjay" , 12)

function Person1 (username , password){
    this.username = username ;
    this.password = password
    console.log("Working second Person")
}
Person1("sanjaysingh" , 'sanjay@123')