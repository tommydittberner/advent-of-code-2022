"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/10
var fs = require("fs");
var operations = fs.readFileSync('10_input.txt', 'utf8').split('\n');
var output = [];
var currLine = '';
var x = 1;
var cycle = 0;
var cycleRunning = false;
for (var i = 0; i < operations.length; i++) {
    var op = operations[i].split(' ');
    if ([x - 1, x, x + 1].includes(cycle % 40)) {
        currLine += '#';
    }
    else {
        currLine += '.';
    }
    ++cycle;
    if (currLine.length === 40) {
        output.push(currLine);
        currLine = '';
    }
    if (op[0] !== 'noop') {
        cycleRunning = !cycleRunning;
        if (!cycleRunning) {
            x += parseInt(op[1]);
        }
        else {
            i--;
        }
    }
}
console.log(output);
