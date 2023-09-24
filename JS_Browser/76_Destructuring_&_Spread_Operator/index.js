// Destructuring

// let [a, b, c] = [3, 5, 8, 10, 20];
// let [a, b, c, ...rest] = [3, 5, 8, 10, 20];
// let [a, , , ...rest] = [3, 5, 8, 10, 20];
// console.log(a, rest);
// console.log(a, b, c, rest);
// console.log(a, b, c);

let { a, b } = { a: 1, b: 5 };
console.log(a, b);

// Spread operator
// 1. Used to convert arrays into objects
let array = [1, 2, 3];
let object = { ...array };
console.log(object);

// 2. When you want to pass an array into your function you can use spread operator.
const sum = (x, y, z) => {
  return x + y + z;
};

console.log(sum(...array));

let object2 = {
  name: "Raahim",
  age: 18,
  city: "Karachi",
};

// Only changing the name of object2
console.log({ ...object2, name: "Furqan" });
console.log({ name: "Furqan", ...object2 }); // This will print the object as it is, therefore the name will not be changed.
