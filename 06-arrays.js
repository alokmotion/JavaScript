// Lecture 06: Arrays
// Learning about array methods and operations

let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];

// Array Methods
console.log("Original array:", numbers);

// Push (add to end)
numbers.push(6);
console.log("After push:", numbers);

// Pop (remove from end)
let last = numbers.pop();
console.log("Popped value:", last);
console.log("After pop:", numbers);

// Shift (remove from beginning)
let first = numbers.shift();
console.log("Shifted value:", first);

// Unshift (add to beginning)
numbers.unshift(1);
console.log("After unshift:", numbers);

// Length
console.log("Array length:", numbers.length);

// Map (transform array)
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Filter
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// ForEach
console.log("ForEach output:");
names.forEach(name => console.log(name));

