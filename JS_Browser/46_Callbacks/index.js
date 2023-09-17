// Synchronous programming

// let a = prompt("Enter you name: ");
// let b = prompt("Enter your age: ");

// console.log("Hi" + a + ", your age is " + b);

// Asynchronous programming

// console.log("Start")
// setTimeout(() => {
//     console.log("Hey this is settimeout function")
// }, 2000);
// console.log("End")

// Callback is just a fancy name, we are just passing the function as a variable and then just executing it (function ko function de diya aur usko chala diya function k andar)

const loadScripts = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log(src + " loaded");
    callback(null, src);
  };
  //   Handling the error message
  script.onerror = () => {
    console.log(src + " not loaded");
    callback(new Error("SRC got some error"));
  };
  document.body.appendChild(script);
};

const hello = (error, src) => {
    if (error) {
      console.log(error);
      return;
    }
  alert("Hello World" + src);
};

const goodmorning = (error, src) => {
    if (error) {
      console.log(error);
      return;
    }
  alert("Good Morning" + src);
};
loadScripts(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  hello
);
