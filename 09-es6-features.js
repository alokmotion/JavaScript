// Lecture 09: ES6 Features
// Learning about modern JavaScript features

// 1. Let and Const
let mutable = "can change";
const immutable = "cannot change";
// immutable = "error"; // This would cause an error

// 2. Arrow Functions
const add = (a, b) => a + b;
console.log("Arrow function:", add(2, 3));

// 3. Template Literals
let name = "John";
let age = 30;
let info = `Name: ${name}, Age: ${age}`;
console.log("Template literal:", info);

// 4. Destructuring
// Array Destructuring
let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;
console.log("First color:", firstColor);

// Object Destructuring
let person = { name: "Alice", age: 25, city: "NYC" };
let { name: personName, age: personAge } = person;
console.log("Person name:", personName);

// 5. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

// 6. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

// 7. Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log("Default param:", greet());
console.log("With param:", greet("Bob"));

