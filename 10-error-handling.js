// Lecture 10: Error Handling
// Learning about try-catch-finally and error types

// Try-Catch Block
try {
    let result = 10 / 0;
    console.log("Result:", result);
    
    // Throwing custom error
    // throw new Error("Something went wrong!");
    
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always executes");
}

// Try-Catch with different error types
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

// Type checking before operations
function safeDivide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log("Safe divide:", safeDivide(10, 2));
} catch (error) {
    console.log("Caught:", error.message);
}

