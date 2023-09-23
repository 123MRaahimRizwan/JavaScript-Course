class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log(`${this.name} is flying`);
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
}

class Rabbit extends Animal {
  eatCarrot() {
    console.log(`${this.name} is eating carrot`);
  }
}

// let animal = new Animal("Raahim");
let animal = new Rabbit("Raahim");
animal.fly();
console.log(animal.name);
animal.name = "Mariam";
console.log(animal.name);

let number = 56;

console.log(animal instanceof Animal);
console.log(animal instanceof Rabbit);
console.log(number instanceof Animal);
