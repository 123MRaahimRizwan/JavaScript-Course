let a = {
  name1: "Raahim",
  language: "JavaScript",
  run: () => {
    alert("SELF RUN!");
  },
};

console.log(a);

let p = {
  run: () => {
    alert("RUN!");
  },
};

p.__proto__ = {
  name: "Jackie",
};

a.__proto__ = p;

a.run();
console.log(a.name);
