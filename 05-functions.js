// Lecture 05: Functions
// Learning about function declarations, expressions, arrow functions

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// Arrow Function (ES6)
const multiply = (a, b) => {
    return a * b;
};
console.log("Product:", multiply(4, 5));

// Arrow Function (Shorter syntax)
const square = x => x * x;
console.log("Square:", square(6));

// Function with Default Parameters
function introduce(name = "Guest", age = 0) {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
}
console.log(introduce("Bob", 25));
console.log(introduce()); // Uses default values

