class Employee {
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

const programmer = new Programmer();

programmer.login();
programmer.requestLeaves(3);
