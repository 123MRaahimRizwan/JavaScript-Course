let promise_resolved = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("Promise is resolved");
    resolve(true);
  }, 5000);
});
let promise_rejected = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("Promise is rejected");
    reject(new Error("Some error occurred"));
  }, 5000);
});

// To get the value
promise_resolved.then((value) => {
  console.log(value);
});

// To catch the error
// promise_rejected.catch((error) => {
//   console.log("Some error occurred");
// });

promise_rejected.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

console.log(promise_resolved, promise_rejected);
