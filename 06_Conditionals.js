// Conditionals in JavaScript

const prompt = require("prompt-sync")();

// Nested If else statements

let age = prompt("Enter your age: ");

if (age < 0) {
  console.log("This is an invalid age");
}

if (age < 9) {
  console.log("You are a kid and you cannot drive");
} 
else if (age > 9 && age <= 18) {
  console.log("You can drive after 18");
} 
else {
  console.log("You can drive");
}


// Switch Case Statements

const book = "Atomic Habits"
switch (book) {
    case "Harry Potter":
        console.log("Harry Potter is available for $2")
        break;
    case "Habits of highly successful people":
        console.log("This book is available for $10")
    case "Atomic Habits":
        console.log("This book is available for $20")

    default:
        console.log("The book you asked for is not available")
}

// Ternary Operator

console.log("You can", (age<18 ? "not drive" : "drive"))