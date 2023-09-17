// Chapter 08 Practice Set Question 1
let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
let button4 = document.getElementById("btn-4");

button1.addEventListener("click", () => {
  alert("Button 1 clicked");
});

button2.addEventListener("click", () => {
  alert("Button 2 clicked");
});

button3.addEventListener("click", () => {
  alert("Button 3 clicked");
});

button4.addEventListener("click", () => {
  alert("Button 4 clicked");
});

// Chapter 08 Practice Set Question 2 and 3

let google = document.getElementById("google");
let youtube = document.getElementById("youtube");
let cwh = document.getElementById("cwh");

cwh.addEventListener("click", () => {
  window.open("https://codewithharry.com");
});

youtube.addEventListener("click", () => {
  window.open("https://www.youtube.com");
});

google.addEventListener("click", () => {
  window.open("https://www.google.com");
});
// Chapter 08 Practice Set Question 4

const fetchURL = async (url) => {
  content = await fetch(url);
  data = await content.json();
  return data;
};

setInterval(async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchURL(url));
}, 3000);

// Chapter 08 Practice Set Question 5

setInterval(async () => {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 100);
