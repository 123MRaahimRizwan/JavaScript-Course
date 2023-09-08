// Chapter 2 Practice Set - Q1

let age1 = prompt("Enter your age: ");
age1 = Number.parseInt(age1);

if (age1 > 10 && age1 < 20) {
  console.log("Your age is in between 10 and 20");
} else {
  console.log("Your age is not in between 10 and 20");
}

// Chapter 2 Practice Set - Q2

let fruit = "banana";
switch (fruit) {
  case "papaya":
    console.log("The fruit is papaya");
    break;
  case "banana":
    console.log("The fruit is banana");
    break;
  case "apple":
    console.log("The fruit is apple");
    break;
  default:
    console.log("All fruits are good for health");
}

// Chapter 2 Practice Set - Q3

let number = prompt("Enter a number: ");
number = Number.parseInt(number);

if (number % 2 === 0 && number % 3 === 0) {
  console.log("The number is divisible by both 2 and 3");
} else {
  console.log("The number is not divisible by 2 and 3");
}

// Chapter 2 Practice Set - Q4

let num = prompt("Enter a number: ");
num = Number.parseInt(num);

if (num % 2 === 0 || num % 3 === 0) {
  console.log("The number is divisible by either 2 or 3");
} else {
  console.log("The number is not divisible by 2 or 3");
}

// Chapter 2 Practice Set - Q5

let age = prompt("Enter your age: ");
let a = age > 18 ? "You can drive" : "You cannot drive";
console.log(a);
