class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  walk() {
    alert(`${this.name} is walking`);
  }
  // static methods are used for the whole class
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

let jack = new Animal("jack");
jack.walk();
// console.log(jack.capitalize("jack")); // This will not work
