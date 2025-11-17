# 📝 JavaScript Interview Notes

## 🔹 What is a Constructor Function in JavaScript?

- A **constructor function** is a special function used to **create and initialize objects**.  
- It is called using the **`new` keyword**.  
- Inside a constructor, we use **`this`** to assign properties to the newly created object.

---

## 🔹 What is the `this` Keyword?

- **`this` refers to the object that is currently executing the code.**  
- The value of `this` depends on how and where the function is called.  
- In constructor functions, **`this` always points to the new object**.

---

## 🔹 What is the `new` Keyword in JavaScript?

- The **`new` keyword** is used to **create a new object instance** from a constructor function or class.  
- It automatically performs four steps:  
  1. Creates a new empty object  
  2. Binds `this` to that object  
  3. Executes the constructor  
  4. Returns the object  

---
