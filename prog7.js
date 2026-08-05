const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ").toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}

console.log("Number of vowels:", count);