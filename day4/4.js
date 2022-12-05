"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/4
var fs = require("fs");
var lines = fs.readFileSync('4_input.txt', 'utf8').split('\n');
var sum = 0;
lines.forEach(function (line) {
    var elves = line.split(',');
    var min1 = parseInt(elves[0].split('-')[0]);
    var min2 = parseInt(elves[1].split('-')[0]);
    var max1 = parseInt(elves[0].split('-')[1]);
    var max2 = parseInt(elves[1].split('-')[1]);
    if (min1 <= min2 && max1 >= max2 ||
        min2 <= min1 && max2 >= max1) {
        sum += 1;
    }
});
console.log(sum);
