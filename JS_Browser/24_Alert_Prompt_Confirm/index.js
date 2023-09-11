alert("Enter a number");
let a = parseInt(prompt("Enter a number here", "69")); // The second argument is the default value
alert(`You entered a number of type ${typeof a}`);

let write = confirm("Do you want to write it on the page");
if (write) {
  document.write(a);
} else {
  document.write("Please let me write it on the page");
}
