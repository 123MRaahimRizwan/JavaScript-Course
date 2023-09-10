let array = [45, 23, 21, 7, 88];

// Note: These functions do not modify the original array

// Array map method

// map makes a new array, while forEach is used to modify the existing array

let a = array.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);

// Array filter method

let array2 = [1, 2, 3, 4, 5, 6];
let a2 = array2.filter((value) => {
  return value < 4;
});
console.log(a2);

// Array reduce method

// The easiest-to-understand case for reduce() is to return the sum of all the elements in an array

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr3 = array3.reduce((value1, value2) => {
  return value1 + value2;
});
console.log(newArr3);
