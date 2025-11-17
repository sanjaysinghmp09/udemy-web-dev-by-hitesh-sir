// Simple Function declaration
// function greet (name){
//     console.log(`Hello ${name}`);
// }
// greet('Sanjay')

function Person (name , age){
    this.name = name 
    this.age = age 
 
}

function Person1 (username , password){
    this.username = username ;
    this.password = password
    
}

let myDB = new Person1("sanjay09" , "123321" )
// console.log(myDB)
let myInfo = new Person("sanjay singh" , "23" )
// console.log(myInfo)


// prectice 

function Tea(type){
    this.type = type
}

let myTea = new Tea ('tulsi or adrak long')
console.log(myTea)