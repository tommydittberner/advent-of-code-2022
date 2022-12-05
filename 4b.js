"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('4_input.txt', 'utf8');
var lines = input.split('\n');
var sum = 0;
lines.forEach(function (line) {
    var elves = line.split(',');
    var min1 = parseInt(elves[0].split('-')[0]);
    var min2 = parseInt(elves[1].split('-')[0]);
    var max1 = parseInt(elves[0].split('-')[1]);
    var max2 = parseInt(elves[1].split('-')[1]);
    if (min1 >= min2 && min1 <= max2 ||
        min2 >= min1 && min2 <= max1) {
        sum += 1;
    }
});
console.log(sum);
