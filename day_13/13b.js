"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var input = (0, readInput_1.default)("13_input.txt")
    .filter(function (ele) { return ele !== ''; })
    .map(function (i) { return JSON.parse(i); });
// add divider packets
input.push([[2]]);
input.push([[6]]);
var res = input
    .sort(function (a, b) { return compare(a, b); })
    .map(function (ele) { return JSON.stringify(ele); });
var div1 = res.findIndex(function (i) { return i === "[[2]]"; }) + 1;
var div2 = res.findIndex(function (i) { return i === "[[6]]"; }) + 1;
console.log(div1 * div2);
function compare(left, right) {
    if (typeof left === 'number' && typeof right === 'number') {
        return left === right ? 0 : left < right ? -1 : 1;
    }
    else if (typeof left === 'number') {
        return compare([left], right);
    }
    else if (typeof right === 'number') {
        return compare(left, [right]);
    }
    else {
        var shortestSideLength = Math.min(left.length, right.length);
        for (var i = 0; i < shortestSideLength; i++) {
            var res_1 = compare(left[i], right[i]);
            if (res_1 !== 0) {
                return res_1;
            }
        }
        return left.length - right.length === 0
            ? 0
            : left.length < right.length ? -1 : 1;
    }
}
;
