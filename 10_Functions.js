let a = 3;
let b = 4;
let c = 5;

// Simple ordinary function
function avg(x, y) {
  return (x + y) / 2;
}

// Modern arrow function
const sum = (a, b) => {
  return a + b;
};

console.log("Average of a and b is", avg(a, b));
console.log("Average of b and c is", avg(b, c));
console.log("Average of a and c is", avg(a, c));
console.log("The sum of a and b is", sum(a, b));
