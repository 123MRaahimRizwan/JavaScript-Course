// Guess the Number Game

const guessTheNumber = () => {
  let number = Math.floor(Math.random() * 100) + 1;
  let chances = 0;

  let input;
  while (input !== number) {
    input = parseInt(prompt("Enter a number"));
    if (input == number) {
      console.log("You have guessed the right number");
    } else if (input < number) {
      console.log(`The correct number is greater than ${input}`);
    } else {
      console.log(`The correct number is lesser than ${input}`);
    }
    chances++;
  }

  console.log(`Your score is ${100 - chances} and the number is ${number}`);
};

guessTheNumber();
