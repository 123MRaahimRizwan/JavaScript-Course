let first = document.getElementById("first");
console.log(first.classList);

first.className = "red text-dark";
first.classList.remove("red");
first.classList.add("red");
first.classList.contains("red");
first.classList.toggle("red");