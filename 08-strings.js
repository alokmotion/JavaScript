// Lecture 08: Strings
// Learning about string methods and template literals

let greeting = "Hello, JavaScript!";
let name = "Alice";

// String Methods
console.log("Original:", greeting);
console.log("Length:", greeting.length);
console.log("Uppercase:", greeting.toUpperCase());
console.log("Lowercase:", greeting.toLowerCase());
console.log("Substring:", greeting.substring(0, 5));
console.log("Slice:", greeting.slice(7, 17));

// String Concatenation
let message1 = "Hello, " + name + "!";
console.log("Concatenation:", message1);

// Template Literals (ES6)
let message2 = `Hello, ${name}! Welcome to JavaScript.`;
console.log("Template Literal:", message2);

// String Methods (Search)
let text = "JavaScript is awesome";
console.log("Includes 'awesome':", text.includes("awesome"));
console.log("Index of 'is':", text.indexOf("is"));
console.log("Starts with 'Java':", text.startsWith("Java"));

// String Methods (Replace)
let newText = text.replace("awesome", "amazing");
console.log("Replaced:", newText);

// String Splitting
let words = text.split(" ");
console.log("Split into words:", words);

