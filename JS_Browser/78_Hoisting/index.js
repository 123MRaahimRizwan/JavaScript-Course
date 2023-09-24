console.log(a);
greet();
function greet() {
  console.log("Good Morning");
}

var a = 10; // declaration hoisted to the top but initialization is not.
// let a = 10;  // this will throw an error
// const a = 10; // this one also
console.log(a);
