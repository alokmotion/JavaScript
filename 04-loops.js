// Lecture 04: Loops
// Learning about for, while, do-while, for-in, for-of loops

// For Loop
console.log("For Loop:");

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// While Loop
console.log("\nWhile Loop:");

let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

// Do-While Loop
console.log("\nDo-While Loop:");
let x = 0;
do {
    console.log("Value:", x);
    x++;
} while (x < 3);

// For-Of Loop (Arrays)
console.log("\nFor-Of Loop (Arrays):");

let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For-In Loop (Objects)
console.log("\nFor-In Loop (Objects):");
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ":", person[key]);
}

