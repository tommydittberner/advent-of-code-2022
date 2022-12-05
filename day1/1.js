"use strict";
// https://adventofcode.com/2022/day/1
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('1_input.txt', 'utf8').split('\n');
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
