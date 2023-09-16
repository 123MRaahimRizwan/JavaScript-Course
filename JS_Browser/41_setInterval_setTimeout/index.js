document.write("hello");

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c));
};

setTimeout(sum, 2000, 1, 2, 3);

// Quiz
const multiply = (a, b) => {
  console.log("The output is " + a * b);
};

setInterval(multiply, 2000, 1, 10);

let set_timeout = setTimeout(() => {
  alert("This is setTimeout function");
}, 2000);

let input = prompt("Do you want to stop the timeout? (y/n)");
if (input === "n") {
  clearTimeout(set_timeout);
}
