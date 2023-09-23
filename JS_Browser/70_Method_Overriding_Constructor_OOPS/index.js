class Employee {
  constructor(name) {
    console.log(`${name}'s Employee constructor is here`);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in!`);
  }
  logout() {
    console.log(`Employee has logged out!`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves!`);
  }
}

class Programmer extends Employee {
  //   constructor(...args) { === If there is no constructor in the child class then the js engine will automatically create the adjacent constructor.
  //     super(...args);
  //   }
  constructor(name) {
    super(name); // If you want to use the this keyword in the child class then you have to call the super keyword before the this keyword.
    console.log(`${name}'s Programmer constructor is here`);
    this.name = name;
  }
  requestCoffee(x) {
    console.log(`Programmer has requested ${x} coffees!`);
  }
  requestLeaves(leaves) {
    // super calls the parent class and which ever method is given to super it will be called from the parent class
    super.requestLeaves(4);
    console.log("Leaves have been given");
    // console.log(`Programmer has requested ${leaves + 1} leaves! One extra`);
  }
}

// const employee = new Employee();

// employee.login();
// employee.requestLeaves(3);

const programmer = new Programmer("Raahim");

programmer.login();
programmer.requestLeaves(3);
