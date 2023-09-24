// IIFE - Immediately Invoked Function Expressions

let promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 2000);
  });
};

// IIFE syntax
(async () => {
  let b = await promise();
  console.log(b);
  let c = await promise();
  console.log(c);
  let d = await promise();
  console.log(d);
})();
