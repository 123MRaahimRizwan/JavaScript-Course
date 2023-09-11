console.log("log");
console.warn("warn");
console.error("Error");
console.info("Info");
console.assert(77 > 5);

console.time("ForLoop");
for (let i = 0; i < 500; i++) {
  console.log(233);
}
console.timeEnd("ForLoop");


console.time("WhileLoop");
let i = 0;
while (i < 500) {
    console.log(233);
    i++;
}
console.timeEnd("WhileLoop");
