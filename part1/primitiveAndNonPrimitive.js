// Primitive vs Non-Primitive Data Types in JavaScript

// ✅ Primitive Data Types   good t o go
let name = "Sanjay"; // String
let age = 21; // Number
let isStudent = true; // Boolean
let a; // Undefined
let emptyValue = null; // Null
let bigNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

console.log("Primitive Data Types:");
console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof isStudent, isStudent);
console.log(typeof a, a);
console.log(typeof emptyValue, emptyValue); // object (JS quirk)
console.log(typeof bigNumber, bigNumber);
console.log(typeof uniqueId, uniqueId);

// ✅ Primitive copied by VALUE
let x = 10;
let y = x;
x = 20;
console.log("\nCopy by Value:");
console.log("x =", x);
console.log("y =", y); // 10

// ✅ Non-Primitive Data Types
let person = { name: "Sanjay", age: 21 }; // Object
let numbers = [1, 2, 3, 4]; // Array
function greet() { // Function
  console.log("Hello Sanjay!");
}

console.log("\nNon-Primitive Data Types:");
console.log(typeof person, person);
console.log(typeof numbers, numbers);
console.log(typeof greet, greet);

// ✅ Non-Primitive copied by REFERENCE
let obj1 = { value: 100 };
let obj2 = obj1;
obj1.value = 200;
console.log("\nCopy by Reference:");
console.log("obj1.value =", obj1.value);
console.log("obj2.value =", obj2.value); // 200 (same reference)

let userName = "Sanjay";
