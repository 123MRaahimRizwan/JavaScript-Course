// getelementById
let card_title = document.getElementById('first-card-title');
card_title.style.color = "red";

// querySelectorAll
let card_titles = document.querySelectorAll('.card-title');
card_titles[0].style.color = "blue";
card_titles[1].style.color = "green";
card_titles[2].style.color = "purple";

// querySelector
document.querySelector('.this').style.color = "white";

// getElementsByTagName
console.log(document.getElementsByTagName("a"))

// getElementsByName
console.log(document.getElementsByName("search"))