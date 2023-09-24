const sayHello = () => {
  console.log("Hello world!");
};
sayHello();

// The above function can also be written as
const sayHello1 = () => console.log("Hello world!");
sayHello1();

const x = {
  name: "Raahim",
  age: 18,
  role: "JS Developer",
  showName: function () {
    // let that = this;
    setTimeout(() => {
      console.log(`The name is ${this.name} and the role is ${this.role}`);
    }, 2000);
  },
};

x.showName();
