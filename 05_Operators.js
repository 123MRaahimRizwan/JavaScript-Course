console.log("Operators in JS");

let a = 10;
let b = 3;

// Arithmetic Operators

console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("a%b =", a % b);
console.log("a**b =", a**b);
// console.log("a++ =", a++); 
// console.log("a-- =", a--);
// console.log("++a =", ++a);
// console.log("--a =", --a);

// Assignment Operators

let assignment = 1;
console.log(assignment += 5); // assignment = assignment + 5
console.log(assignment -= 5); // assignment = assignment - 5
console.log(assignment *= 5); // assignment = assignment * 5
console.log(assignment /= 5); // assignment = assignment / 5

// Comparison Operators
let comp1 = 6;
let comp2 = 7;

console.log("comp1 == comp2 is", comp1 == comp2)
console.log("comp1 != comp2 is", comp1 != comp2)
console.log("comp1 === comp2 is", comp1 === comp2) // === always checks the type of the variable if a is int and b in string but both are 6 then === will return false as they are of two different datatypes.
console.log("comp1 !== comp2 is", comp1 !== comp2)

// Logical Operators: They Operate on Booleans

let log1 = 12;
let log2 = 13;

console.log(log1 < log2 && log1 == 12)
console.log(log1 >  log2 || log1 == 12)
console.log(!true) // Output: false
console.log(!false) // Output: true
// ! Operator makes false true and true false

// Comments: This is a single line comment
/* 
This is a multiline comment
*/

