const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// If any element in an array does not exist then the output will be undefined

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array[10] = 69; // Adding a new value to the array
console.log(array);
array[0] = 96; // Changing an existing value in the array
console.log(array);
console.log(typeof array); // arrays are always an object
