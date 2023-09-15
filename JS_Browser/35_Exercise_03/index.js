// Jokes exercise

let jokes_array = ["Why do programmers prefer dark mode, Because light attracts bugs!", " Why was the JavaScript developer sad, Because he didn't know how to 'null' his feelings.", "What's the first step in understanding Recursion ,To understand recursion, you have to first understand recursion.", "Why do programmers prefer dark chocolate, Because it has fewer bugs.", "Why did the programmer quit his job, He didn't get arrays.", " Why do Java developers wear glasses, Because they can't C#.", "Why did the programmer go broke, Because he used up all his cache.", "There are 10 types of people in this world. Those who understand binary and those who don't.", "A programmer puts two glasses on his bedside table before going to sleep. One full of water in case he gets thirsty and an empty one in case he doesn't."]

// generate the random joke
let index = Math.floor(Math.random() * (jokes_array.length - 1))
console.log(index)

let randomjoke = document.getElementById("randomjoke");
randomjoke.innerHTML = jokes_array[index];