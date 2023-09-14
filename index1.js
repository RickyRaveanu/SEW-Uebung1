const prompt = require("prompt");

prompt.start();
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "schaltjahr";
    } else {
        return "kein schaltjahr";
    }
};
prompt.get(["jahr"], function (err, result) {
    console.log(isLeapYear(result.jahr));
});