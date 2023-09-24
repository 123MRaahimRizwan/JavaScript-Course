// Chapter 12 Practice Set Q1

const func = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
  let text = await func("Hello");
  console.log(text);
  text = await func("World");
  console.log(text);
})();

// Chapter 12 Practice Set Q2
const average = (a, b, c) => {
  return (a + b + c) / 3;
};

let arr = [1, 2, 3];
console.log(average(...arr));

// Chapter 12 Practice Set Q3

const myFunc = (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000 * n);
  });
};

(async () => {
  let text = await myFunc("I am resolving after one second", 1);
  console.log(text);
  text = await myFunc("I am resolving after five seconds", 5);
  console.log(text);
})();

// Chapter 12 Practice Set Q4

const interestCalculator = (p, r, t) => {
  interest = (p * r * t) / 100;
  return interest;
};

console.log(interestCalculator(10000, 5, 2));
