// Program to add first n natural numbers

let sum = 0;
let n = prompt("Enter a number")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1);
}
console.log("The sum of first "+ n + " natural numbers is "+ sum)

// Program to find out factorial of n natural numbers

let factorial = 1;
let number = prompt("Enter a number")
number = Number.parseInt(number)
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("The factorial of "+ number + " natural numbers is "+ factorial)

// For In Loop

let obj = {
  Raahim: 100,
  Mariam: 20,
  Iman: 50,
  Maheen: -50,
};

for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// For of Loop

// In case of for of loop the object (in this case "Raahim") needs to be an iterable meaning a string or an array.

for (let b of "Raahim") {
  console.log(b);
}
