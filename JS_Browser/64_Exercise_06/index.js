// TODO App

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let Note = document.getElementById("notes");
let alerts = document.getElementById("alerts");
let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("click", () => {
  window.location.href =
    "https://www.youtube.com/watch?v=hKESY_D2LI0&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=73&t=1s";
});

const addNote = () => {
  if (input.value === "") {
    alerts.innerHTML = "You must enter something";
  } else {
    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    alerts.innerHTML = "";
  }
};

const removeNote = () => {
  localStorage.removeItem("notes");
  notes = [];
  Note.innerHTML = "All notes have been deleted successfully";
};

const showNotes = () => {
  if (notes.length === 0) {
    Note.innerHTML = "You must add notes first in order to view them!";
  } else {
    Note.innerHTML = "Your notes:<br>";
    notes.forEach((note, index) => {
      Note.innerHTML += `${index + 1}. ${note}<br>`;
    });
  }
};
