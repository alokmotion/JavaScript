// Lecture 03: Conditional Statements
// Learning about if, else if, else, switch statements

// If-Else Statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// If-Else If-Else
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Switch Statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Regular day");
}

