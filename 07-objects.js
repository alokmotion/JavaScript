// Lecture 07: Objects
// Learning about object creation, properties, methods

// Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    
    // Method
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // Method (ES6 shorthand)
    introduce() {
        return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
    }
};

// Accessing Properties
console.log("First Name:", person.firstName);
console.log("Age:", person["age"]);
console.log("Full Name:", person.getFullName());
console.log("Introduction:", person.introduce());

// Adding Properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Nested Objects
let student = {
    name: "Alice",
    grades: {
        math: 95,
        science: 87,
        english: 92
    }
};

console.log("Math Grade:", student.grades.math);

