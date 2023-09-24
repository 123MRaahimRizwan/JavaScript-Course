message = "Good Global";

function hello() {
  let message = "Good Morning";
  // let message = "Good Afternoon";
  console.log(message);
  let c = function hello2() {
    console.log("I am c" + message);
  };
  return c;
}

c = hello();
c();

// MDN Docs Example

function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let d = init();
d();

// Practice Func

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      let a = 2;
      console.log(a);
      const z = () => {
        let a = 3;
        console.log(a);
      };
      z();
    };
    y();
  };
  return x;
}

let e = returnFunc();
e();
