// Looping through arrays

let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// Squaring the elements of array by forEach loop
num.forEach((element) => {
  console.log(element * element);
});

// Array.from

let name = "Raahim";
let arr = Array.from(name);
console.log(arr);

// for...of loop

// This is a shortcut method to access elements from an array
for (let item of num) {
  console.log(item);
}

// for... in loop

// This gives us the keys of the elements in an array. As array is an object therefore it has keys but we cannot see them.
for (let item in num) {
  console.log(item);
}
