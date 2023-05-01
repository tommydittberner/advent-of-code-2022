"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var pairs = (0, readInput_1.default)("13_input.txt", new RegExp(/\r?\n\r?\n/g));
var sum = 0;
pairs.forEach(function (pair, idx) {
    var sides = pair.split(new RegExp(/\r?\n/g));
    var res = compare(JSON.parse(sides[0]), JSON.parse(sides[1]));
    if (res === -1) {
        sum += idx + 1;
    }
});
console.log(sum);
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
            var res = compare(left[i], right[i]);
            if (res !== 0) {
                return res;
            }
        }
        return left.length - right.length === 0
            ? 0
            : left.length < right.length ? -1 : 1;
    }
}
;
