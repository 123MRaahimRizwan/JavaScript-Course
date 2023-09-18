// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise is resolved after two seconds");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
//   console.log("We are done");
//   return 2;
// }).then((value) => {
//     console.log("Now we are pakka done");
// });

// Quick Quiz

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("The script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
  console.log(value);
}).catch((error) => {
    console.log("Something went wrong")
});