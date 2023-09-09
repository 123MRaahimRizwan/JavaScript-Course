const array = [1, 2, 3, 4];

let string = array.toString();
let joined_string = array.join("_");

console.log(joined_string);

let popped_element = array.pop(); // pop returns the popped element
console.log(array, popped_element);

let push_function = array.push(5); // Adds the given element to the array
console.log(array);

let shift_function = array.shift(); // Removes the element from the start from an array
console.log(shift_function);

let unshift_function = array.unshift(); // Adds the element in the array
console.log(unshift_function);
console.log(array);
