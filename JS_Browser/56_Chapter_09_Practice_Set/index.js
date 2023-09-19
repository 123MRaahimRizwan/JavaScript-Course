// Chapter 09 Practice Set Q1

const loadScripts = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            console.log('Script loaded');
            resolve(src);
        };
        document.head.append(script);
    });
};

let func1 = loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

func1.then((value) =>{
    console.log(value)
})

// Chapter 09 Practice Set Q2

const main_func = async () => {
    let func = await loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(func);
};

main_func();

// Chapter 09 Practice Set Q3

const my_func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error occured"));
    }, 3000);
  });
};

const async_await = async () => {
  try {
    let c = await my_func();
    console.log(c);
  }
  catch (error) {
    console.log("Something went wrong");
  }
};

async_await();

// Chapter 09 Practice Set Q4

const promise_one = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    })
};

const promise_two = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000);
    })
};

const promise_three = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
};

const run = async () => {
    console.time("run");
    // let a1 = await promise_one();
    // let a2 = await promise_two();
    // let a3 = await promise_three(); // Output: 6 sec
    console.log(a1, a2, a3);
    let a1 = promise_one();
    let a2 = promise_two();
    let a3 = promise_three();
    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3); // Output: 3 sec
    console.timeEnd("run");
};

run();
