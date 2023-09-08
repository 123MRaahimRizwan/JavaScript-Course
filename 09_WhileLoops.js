let n = prompt("Enter a value");
n = Number.parseInt(n);

// while loop

// In while loop condition is evaluated first and then the code block is executed.
let i_ = 0;
while (i_ < n) {
  console.log(i_);
  i_++;
}

// do while loop

// In do while loop the code block is first executed and then the condition is evaluated.
let i = 0;
do {
  console.log(i);
  i++;
} while (i < n);
