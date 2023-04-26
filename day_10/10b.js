"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var operations = (0, readInput_1.default)('10_input.txt');
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
