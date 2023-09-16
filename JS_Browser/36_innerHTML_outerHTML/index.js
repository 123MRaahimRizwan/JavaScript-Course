console.log(document.getElementsByTagName("span")[0]); // Returns <span> </span>
console.dir(document.getElementsByTagName("span")[0]); // Returns span object

console.log(document.body.firstChild.nodeName); 
console.log(document.body.firstElementChild.nodeName);

let first = document.getElementById("first");
console.log(first.innerHTML); 
console.log(first.outerHTML);

first.innerHTML = "<i>This is italic</i>";
console.log(first.innerHTML);

// first.outerHTML = "<div>This is div</div>";
// console.log(first.outerHTML);

console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent); // Is used to copy the whole website as text