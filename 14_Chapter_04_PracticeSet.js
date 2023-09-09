// Chapter 04 - Practice Set

let str1 = 'Har"';
console.log(str1.length);

// Chapter 04 - Practice Set Q2

const sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";

console.log(
  `The word fox ${sentence.includes(word) ? "is" : "is not"} in the sentence`
);

console.log(sentence.startsWith("dog")); // Returns boolean
console.log(sentence.endsWith("dog"));

// Chapter 04 - Practice Set Q3

const string_to_lower = (string) => {
  return string.toLowerCase();
};

console.log(string_to_lower("Raahim"));

// Chapter 04 - Practice Set Q3

let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice(15));
console.log(amount);

// Chapter 04 - Practice Set Q4

let fruit = "Banana";
fruit[3] = "R"; // This will not change because fruit is immutable
console.log(fruit);
