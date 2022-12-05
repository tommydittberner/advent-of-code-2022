"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('5_input.txt', 'utf8').split('\n\n');
var start = input[0];
var orders = input[1];
function getRowsBottomUp(lines) {
    var _a;
    var rows = [];
    while (lines.length > 0) {
        var currLine = (_a = lines.pop()) === null || _a === void 0 ? void 0 : _a.split('');
        var currRow = [];
        for (var idx = 1; idx < currLine.length; idx += 4) {
            currRow.push(currLine[idx]);
        }
        rows.push(currRow);
    }
    return rows;
}
function transposeRowsToStacks(rows) {
    var stacks = [];
    for (var i = 0; i < rows[0].length; i++) {
        var currStack = [];
        for (var j = 0; j < rows.length; j++) {
            if (rows[j][i] !== ' ') {
                currStack.push(rows[j][i]);
            }
        }
        stacks.push(currStack);
    }
    console.log(stacks);
    return stacks;
}
function moveCrane(stacks, orders) {
    for (var i = 0; i < orders.length; i += 3) {
        var numToMove = orders[i];
        var fromStack = stacks[orders[i + 1] - 1];
        var toStack = stacks[orders[i + 2] - 1];
        var toMove = fromStack.splice(fromStack.length - numToMove, fromStack.length);
        toStack = __spreadArray(__spreadArray([], toStack, true), toMove, true);
        stacks[orders[i + 1] - 1] = fromStack;
        stacks[orders[i + 2] - 1] = toStack;
    }
    ;
    return stacks;
}
var numOfStacks = parseInt(start.split(' ').filter(function (i) { return i !== ''; }).pop());
var lines = start.split('\n');
// remove numbers
lines.pop();
var rows = getRowsBottomUp(lines);
var stacks = transposeRowsToStacks(rows);
// split into operations
var orderNumbers = orders.split(new RegExp('[a-z]+'))
    .filter(function (ele) { return ele !== ''; })
    .map(function (ele) { return parseInt(ele.trim()); });
stacks = moveCrane(stacks, orderNumbers);
var output = '';
stacks.forEach(function (s) { return output += s.pop(); });
console.log(output);
