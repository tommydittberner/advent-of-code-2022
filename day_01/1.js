"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var input = (0, readInput_1.default)("1_input.txt");
var res = new Map();
var currSum = 0;
input.forEach(function (entry, idx) {
    if (entry !== '') {
        currSum += parseInt(entry);
    }
    else {
        res.set(idx + 1, currSum);
        currSum = 0;
    }
});
var sortedArr = Array.from(res.values()).sort(function (a, b) { return b - a; });
// Part 1
console.log(sortedArr[0]);
// Part 2
console.log(sortedArr.slice(0, 3).reduce(function (sum, curr) { return sum + curr; }));
