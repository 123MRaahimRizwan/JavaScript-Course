let first = document.getElementById("first");
let class_attribute = first.getAttribute("class");

console.log(class_attribute);

console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false
// first.setAttribute("hidden", "true");
first.setAttribute("class", "true sach");
// first.removeAttribute("class");

console.log(first.attributes);
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);
