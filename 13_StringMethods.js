// Important Note: You cannot change the original string because strings are Immutable. Whenever you apply a method on the original string it will always return a new string.

let name = "Raahim";

console.log(name.length); // .length is a property
console.log(name.toUpperCase()); // toUpperCase and toLowerCase are functions
console.log(name.toLowerCase());
console.log(name.slice(2, 4));
// .slice function works on the principle of n-1 where n are the total number of characters in the string.
console.log(name.slice(2));
// If you do not provide the second argument in .slice, it will take the whole string.
console.log(name.replace("Raahim", "Furqan"));

let friend = "Furqan";
console.log(name.concat(" is a friend of ", friend));

let sentence = "    This is a sentence with spaces     ";
console.log(sentence.trim());
console.log(sentence);

// Quick Quiz

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
