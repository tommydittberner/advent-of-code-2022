"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('1_input.txt', 'utf8');
var res = new Map();
var currSum = 0;
var currIdx = 1;
input.split('\n').forEach(function (entry) {
    if (entry !== '') {
        currSum += parseInt(entry);
    }
    else {
        res.set(currIdx, currSum);
        currIdx++;
        currSum = 0;
    }
});
var elfWithMaxValue = [0];
var sortedArr = Array.from(res.values()).sort(function (a, b) { return b - a; });
// Teil 1
console.log(sortedArr[0]);
// Teil 2
console.log(sortedArr.slice(0, 3).reduce(function (sum, curr) { return sum + curr; }));
