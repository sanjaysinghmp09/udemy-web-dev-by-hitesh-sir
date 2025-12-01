/******************************************************
 * ADVANCED JAVASCRIPT CONCEPTS - ALL IN ONE FILE
 * Topics Covered:
 * 1. Asynchronous JS & Event Loop
 * 2. Closures
 * 3. Promises & Promise Chaining
 * 4. Prototypal Inheritance
 * 5. this Keyword & Binding
 * 6. Async/Await & Promise.all
 * 7. Iterators & Generators
 * 8. ES6 Modules vs CommonJS
 *****************************************************/



/********************************************************
 * 1. ASYNCHRONOUS JAVASCRIPT & EVENT LOOP
 * JavaScript is single-threaded but handles async tasks
 * using the Event Loop.
 * Priority Order:
 * 1. Call Stack
 * 2. Microtask Queue (Promises)
 * 3. Callback Queue (setTimeout)
 ********************************************************/

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
// Output:
// Start → End → Inside Promise → Inside setTimeout



/********************************************************
 * 2. CLOSURES IN JAVASCRIPT
 * A closure is created when an inner function remembers
 * the variables of its outer function even after execution.
 * Used for:
 * - Data hiding
 * - Private variables
 ********************************************************/

function outerFunction() {
  let count = 0; // private variable

  function innerFunction() {
    count++;
    console.log("Count:", count);
  }

  return innerFunction;
}

const counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3



/********************************************************
 * 3. PROMISES & PROMISE CHAINING
 * Promise represents a future value.
 * States:
 * - pending
 * - fulfilled
 * - rejected
 ********************************************************/

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


// Promise Chaining Example

function stepOne() {
  return Promise.resolve(10);
}

function stepTwo(value) {
  return Promise.resolve(value * 2);
}

function stepThree(value) {
  return Promise.resolve(value + 5);
}

stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then((result) => console.log("Final Result:", result)); // 25



/********************************************************
 * 4. PROTOTYPAL INHERITANCE
 * JavaScript uses prototype-based inheritance.
 * Objects inherit properties from their prototype.
 ********************************************************/

function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

const user1 = new Person("Sanjay");
user1.greet();


// Using Object.create()

const parent = {
  sayHello() {
    console.log("Hello from Parent");
  }
};

const child = Object.create(parent);
child.sayHello();



/********************************************************
 * 5. THIS KEYWORD & BINDING CONTEXT
 * Value of 'this' depends on how the function is called.
 ********************************************************/

// Normal function
function showThis() {
  console.log(this);
}
showThis(); // window (or undefined in strict mode)

// Object Method
const user = {
  name: "Sanjay",
  showName() {
    console.log(this.name);
  }
};

user.showName(); // Sanjay


// call(), apply(), bind()

function greet(city) {
  console.log(this.name + " from " + city);
}

const person = { name: "Rahul" };

greet.call(person, "Indore");     // call → single arguments
greet.apply(person, ["Bhopal"]); // apply → array arguments

const boundGreet = greet.bind(person, "Ujjain");
boundGreet(); // bind → returns new function



/********************************************************
 * 6. ASYNC / AWAIT & PROMISE.ALL
 * async/await makes promise handling easier and readable
 ********************************************************/

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Fetched"), 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();


// Promise.all Example

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => {
  console.log("Promise.all Result:", values);
});



/********************************************************
 * 7. ITERATORS & GENERATORS
 * Iterator → object with next() method
 * Generator → function which pauses using 'yield'
 ********************************************************/

// Custom Iterator

const myIterator = {
  values: [1, 2, 3],
  index: 0,

  next() {
    if (this.index < this.values.length) {
      return {
        value: this.values[this.index++],
        done: false
      };
    } else {
      return {
        value: undefined,
        done: true
      };
    }
  }
};

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());


// Generator Function

function* numberGenerator() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



/********************************************************
 * 8. ES6 MODULES vs COMMONJS
 * These examples are comments because they require
 * separate files to work properly.
 ********************************************************/

/*
======== COMMONJS (Node.js) ========

// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require("./math");
console.log(add(2, 3));

======== ES6 MODULES ========

// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(5, 6));

*/

console.log("All Advanced JavaScript Concepts Loaded Successfully ✅");
