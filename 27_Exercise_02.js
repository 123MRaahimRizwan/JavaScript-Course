// Snake Water Gun Game
const snakeWaterGun = () => {
  const snake = "S";
  const water = "W";
  const gun = "G";
  let word = [snake, water, gun];
  let round = 1;
  let userGuesses = 0;
  let computerGuesses = 0;
  while (round <= 3) {
    const randomly_generated = word[Math.floor(Math.random() * 3)];
    let user_input = prompt(
      "Choose between Snake(S), Water(W), and Gun(G) or type 'exit' to end the game"
    );

    if (user_input === "exit") {
      alert("Game over. Thanks for playing!");
      break; // Exit the loop
    }

    if (randomly_generated === user_input) {
      alert("Game is drawn");
    } else if (
      (user_input === snake && randomly_generated === water) ||
      (user_input === water && randomly_generated === gun) ||
      (user_input === gun && randomly_generated === snake)
    ) {
      alert("You won");
      userGuesses++;
    } else {
      alert("Computer won");
      computerGuesses++;
    }
    round++;
    if (computerGuesses > userGuesses) {
      alert("The computer scores more than you");
    }
    if (userGuesses > computerGuesses) {
      alert("You score more than the computer");
    }
  }
};

snakeWaterGun();
