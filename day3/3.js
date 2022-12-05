"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/3
var fs = require("fs");
var lines = fs.readFileSync('3_input.txt', 'utf8').split('\n');
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sum = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var firstHalf = line.substring(0, line.length / 2);
    var secondHalf = line.substring(line.length / 2, line.length);
    for (var _a = 0, _b = firstHalf.split(''); _a < _b.length; _a++) {
        var char = _b[_a];
        if (secondHalf.includes(char)) {
            sum += values.indexOf(char) + 1;
            break;
        }
    }
}
console.log("Total sum = ".concat(sum));
