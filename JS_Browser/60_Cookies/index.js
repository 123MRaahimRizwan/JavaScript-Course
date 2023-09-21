console.log(document.cookie)
document.cookie = "name=raahim8978952"
document.cookie = "name1=raahim89789521"
let key = prompt("Enter a key")
let value = prompt("Enter a value")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` // This is a set call

console.log(document.cookie)