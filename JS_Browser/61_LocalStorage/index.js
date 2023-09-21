let key = prompt("Enter the key you want to set");
let value = prompt("Enter the value you want to set");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

console.log(localStorage.length);
console.log(localStorage.key(0));

if (key == "red" || key == "blue") {
  localStorage.removeItem(key);
}

if (key == 0) {
  localStorage.clear();
}
