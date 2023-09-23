// Selectors
const superStrongPassword = document.getElementById("superStrongPassword");
const strongPassword = document.getElementById("strongPassword");
const weakPassword = document.getElementById("weakPassword");
const funnyPassword = document.getElementById("funnyPassword");
const generateButton = document.getElementById("generateButton");
const exerciseButton = document.getElementById("exerciseButton");
const input = document.getElementById("input");
const password = document.getElementById("password");
const totalCharacters = document.getElementById("totalCharacters");

// Dataset
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+-=";

exerciseButton.addEventListener("click", () => {
  window.location.href =
    "https://www.youtube.com/watch?v=iLHad0KWJ5g&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=85";
});

const randomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

class Password {
  constructor(password) {
    this.password = password;
  }
  generatePassword() {
    return this.password;
  }
  generateStrongPassword() {
    let password = "";
    password += randomData(upperSet);
    password += randomData(lowerSet);
    password += randomData(numberSet);
    return password;
  }
  generateSuperStrongPassword() {
    let password = "";
    password += randomData(upperSet);
    password += randomData(lowerSet);
    password += randomData(numberSet);
    password += randomData(symbolSet);
    return password;
  }
  generateWeakPassword() {
    let password = "";
    password += randomData(upperSet);
    password += randomData(lowerSet);
    return password;
  }
  generateFunnyPassword() {
    const funnyPasswords = [
      "Cool Katz",
      "Big Momma's Back",
      "Yellow Ninjas",
      "Star Trek",
      "Slow Turtle",
      "NewPassword",
      "ChangeMe",
      "NothingAgain",
      "SecretUser",
      "I Need A Password",
      "Password Doctor",
      "ASDF",
    ];
    const randomIndex = Math.floor(Math.random() * funnyPasswords.length);
    return funnyPasswords[randomIndex];
  }
}

generateButton.addEventListener("click", () => {
  const passwordLength = parseInt(totalCharacters.value);

  if (isNaN(passwordLength) || passwordLength < 2 || passwordLength > 20) {
    password.innerHTML =
      "Please enter a valid password length between 2 and 20.";
    return;
  }

  let generatedPassword = "";

  if (superStrongPassword.checked) {
    generatedPassword = new Password().generateSuperStrongPassword();
  } else if (strongPassword.checked) {
    generatedPassword = new Password().generateStrongPassword();
  } else if (weakPassword.checked) {
    generatedPassword = new Password().generateWeakPassword();
  } else if (funnyPassword.checked) {
    generatedPassword = new Password().generateFunnyPassword();
  } else {
    password.innerHTML = "Please select a password strength option.";
    return;
  }

  while (generatedPassword.length < passwordLength) {
    generatedPassword += randomData(
      upperSet + lowerSet + numberSet + symbolSet
    );
  }

  generatedPassword = generatedPassword.substring(0, passwordLength);

  password.innerHTML = `Your password is: ${generatedPassword}`;
});
