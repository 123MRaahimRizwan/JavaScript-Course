// Chapter 05 - Practice Set Q1

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = prompt("Enter a number");
number = Number.parseInt(number);
array.push(number);
console.log(array);

// Chapter 05 - Practice Set Q2

let array1 = [1, 2, 3, 4, 5];
let number1;
do {
  number1 = prompt("Enter a number");
  number1 = Number.parseInt(number1);
  array1.push(number1);
} while (number1 != 0);
console.log(array1);

// Chapter 05 - Practice Set Q3

let array2 = [1, 2, 3, 10, 120, 20, 670];
let n = array2.filter((x) => {
  return x % 10 == 0;
});
console.log(n);

// Chapter 05 - Practice Set Q4

let array3 = [1, 2, 3, 10, 120, 20, 670];
let squared_elements = array3.map((x) => {
  return x * x;
});
console.log(squared_elements);

// Chapter 05 - Practice Set Q5

let array4 = [1, 2, 3, 4, 5];
let factorial = array4.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(factorial);
