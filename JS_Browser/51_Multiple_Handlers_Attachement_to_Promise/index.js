let p1 = new Promise((resolve, reject) => {
  console.log("The promise is not resolved");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

p1.then(() => {
  console.log("The promise is resolved");
});

p1.then(() => {
  console.log("Hurray");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 6000);
  });
}).then((value) => {
  console.log(value);
});
