// Promise is used for parallel execution

let promise = new Promise((resolve, reject) => {
    resolve(56)
    reject("Some error occurred")
});

console.log("This is before settimeout")
setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);
console.log("This is after settimeout")

console.log(promise);