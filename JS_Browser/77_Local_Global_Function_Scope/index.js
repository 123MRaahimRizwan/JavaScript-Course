{
  let a = 9; // Let has block level scope
}
console.log(a); // This will throw an error

let g = 15;
const sum = () => {
  let b = 10;
  console.log(b);
  console.log(g); // This will be executed because g, is global scoped.
};

console.log(g);
sum();
