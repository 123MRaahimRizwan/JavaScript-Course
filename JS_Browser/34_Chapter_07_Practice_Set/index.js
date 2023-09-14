// Chapter 07 Practice Set Q1

navbar = document.getElementsByTagName("nav")[0];
navbar.firstElementChild.style.color = "red";

navbar.firstElementChild.style.color = "green";
navbar.lastElementChild.style.color = "green";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

