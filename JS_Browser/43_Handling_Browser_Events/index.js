let button = document.getElementsByClassName('btn')[0];

let function1 = (event) => {
    console.log(event);
    console.log(event.type, event.target, event.clientX, event.clientY);
    alert('Hello World 1!');
}
let function2 = () => {
    alert('Hello World 2!');
}
button.addEventListener('click', function1);
button.addEventListener('click', function2);

let input = prompt("Enter your favorite number")

if (input == '2') {
    // removeEventListener only works when the reference to the function is same
    button.removeEventListener('click', function1);
}