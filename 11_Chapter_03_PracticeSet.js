// Chapter 03 - Practice Set Q1

let marks = {
  Raahim: 90,
  Mariam: 80,
  Iman: 70,
  Maheen: 60,
};

// Using plain for loop

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

// Chapter 03 - Practice Set Q2

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}

// Chapter 03 - Practice Set Q3

let correct_number = 4;

let i;

while (i != correct_number) {
  console.log("Try again");
  i = prompt("Enter a number");
}
console.log("You have entered the correct number");

// Chapter 03 - Practice Set Q4

const average = (a, b, c, d, e) => {
  avg = (a + b + c + d + e) / 5;
  return avg;
};

console.log(average(1, 2, 3, 4, 5));
