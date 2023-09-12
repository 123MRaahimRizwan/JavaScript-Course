// Chapter 06 Practice Set Q1

const driveFunc = () => {
  let age = parseInt(prompt("Enter your age"));
  if (age < 18) {
    console.log("You cannot drive");
  } else if (age >= 18) {
    console.log("You can drive");
  } else if (age < 10 && age > 0) {
    console.log("You are a kid so you cannot drive");
  } else {
    console.log("Invalid input");
  }
};
driveFunc();

// Chapter 06 Practice Set Q2

const ageFunc = () => {
  let run = true;

  while (run) {
    let age = parseInt(prompt("Enter your age"));
    if (age < 18) {
      alert("You cannot drive");
    } else if (age >= 18) {
      alert("You can drive");
    } else if (age < 10 && age > 0) {
      alert("You are a kid so you cannot drive");
    } else {
      alert("Invalid input");
    }
    run = confirm("Do you want to run again?");
  }
};

ageFunc();

// Chapter 06 Practice Set Q3

const ageErrorFunc = () => {
  let run = true;

  while (run) {
    let age = parseInt(prompt("Enter your age"));
    if (age < 0) {
      console.error("Invalid input");
      break;
    }
    if (age < 18) {
      alert("You cannot drive");
    } else if (age >= 18) {
      alert("You can drive");
    } else if (age < 10 && age > 0) {
      alert("You are a kid so you cannot drive");
    }
    run = confirm("Do you want to run again?");
  }
};

ageErrorFunc();

// Chapter 06 Practice Set Q4

const redirectFunc = () => {
  let number = parseInt(prompt("Enter a number"));
  if (number > 4) {
    location.href = "https://google.com";
  }
};
redirectFunc();

// Chapter 06 Practice Set Q5

const changeBackground = () => {
  let color_input = prompt("Enter a color");
  document.body.style.background = color_input;
};

changeBackground();
