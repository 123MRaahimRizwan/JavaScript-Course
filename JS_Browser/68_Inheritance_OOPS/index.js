class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(`${this.name} is running`);
  }
  shout() {
    console.log(`${this.name} is shouting`);
  }
}
// Inheritance (Monkey is inherited from Animal)
class Monkey extends Animal {
  eatBanana() {
    console.log(`${this.name} is eating a banana`);
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

const monkey = new Monkey("Monkey", "brown");
monkey.eatBanana();
