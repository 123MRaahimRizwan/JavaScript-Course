// Classical way to inset html 

let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>";

// Modern way to insert html
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World!</h1>";
a.appendChild(div);
a.append(div);
a.prepend(div); // Remains inside the container
a.before(div); // Goes outside (start) the container
a.after(div); // Goes outside (end) the container
a.replaceWith(div); // Container div is now gone
