const prompt = require("prompt");

prompt.start();

const vowels = ["a", "i", "u", "e", "o"];
prompt.get(["input"], function (err, result) {
    if (vowels.includes(result.alphabet) ? console.log("Ein Vokal") : console.log("Kein Vokal"));
});