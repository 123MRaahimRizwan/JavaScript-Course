// Chapter 11 Practice Set Q1

class complexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  // Chapter 11 Practice Set Q2
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
  // Chapter 11 Practice Set Q5
  get real() {
    return this._real;
  }
  get imaginary() {
    return this._imaginary;
  }
  set imaginary(value) {
    this._imaginary = value;
  }
  set real(value) {
    this._real = value;
  }
}

let a = new complexNumber(1, 2);
a.real = 12;
a.imaginary = 13;
let b = new complexNumber(3, 4);

a.add(b);

console.log(
  `The real part is ${a.real} and the imaginary part is ${a.imaginary}`
);

// Chapter 11 Practice Set Q3

class Human {
  constructor(name, favFood) {
    this.name = name;
    this.favFood = favFood;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
}

class Student extends Human {
  walk() {
    console.log(`${this.name} student is walking`);
  }
}

const student = new Student("Raahim", "Pizza");
student.walk();

// Chapter 11 Practice Set Q4
console.log(student instanceof Human);
