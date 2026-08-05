const prompt = require("prompt-sync")();

let num = prompt("Enter an integer: ");

let digits = num.replace("-", "");

console.log("Number of digits:", digits.length);