"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var operations = (0, readInput_1.default)('10_input.txt');
var importantCycles = new Map([
    [20, 0], [60, 0], [100, 0], [140, 0], [180, 0], [220, 0],
]);
var sum = 0;
var x = 1;
var cycle = 0;
var cycleRunning = false;
for (var i = 0; i < operations.length; i++) {
    var op = operations[i].split(' ');
    ++cycle;
    if (Array.from(importantCycles.keys()).includes(cycle)) {
        sum += cycle * x;
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
console.log(sum);
