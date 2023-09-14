let id1 = document.getElementById('id1');
let sp1 = document.getElementById('sp1');
console.log(id1);
// matches
console.log(id1.matches(".class")); // Output: false
console.log(id1.matches(".box")); // Output: true

// closest
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

// contains
console.log(id1.contains(sp1)); // Output: true
console.log(sp1.contains(sp1)); // Output: true
console.log(sp1.contains(id1)); // Output: false