"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/9
var fs = require("fs");
var instructions = fs.readFileSync('9_input.txt', 'utf8').split('\n');
var visited = new Set();
var knots = [];
// create 10 knots at the starting position
for (var i = 0; i < 10; i++) {
    knots.push([0, 0]);
}
function move(x, y) {
    // update head
    knots[0][0] += x;
    knots[0][1] += y;
    for (var j = 1; j < 10; j++) {
        // define head of current tail
        var hX = knots[j - 1][0];
        var hY = knots[j - 1][1];
        // define current tail
        var tX = knots[j][0];
        var tY = knots[j][1];
        if (moveTail(hX, hY, tX, tY)) {
            // move 0, -1 or 1
            tX += hX === tX ? 0 : (hX - tX) / (Math.abs(hX - tX));
            tY += hY === tY ? 0 : (hY - tY) / (Math.abs(hY - tY));
        }
        knots[j] = [tX, tY];
    }
}
function moveTail(hX, hY, tX, tY) {
    // returns true if tail is behind head by 2 (or more) on any achsis
    return Math.abs(hX - tX) > 1 || Math.abs(hY - tY) > 1;
}
instructions.forEach(function (i) {
    var direction = i.split(' ')[0];
    var amount = parseInt(i.split(' ')[1]);
    for (var i_1 = 0; i_1 < amount; i_1++) {
        switch (direction) {
            case 'U':
                move(0, -1);
                break;
            case 'R':
                move(1, 0);
                break;
            case 'D':
                move(0, 1);
                break;
            case 'L':
                move(-1, 0);
                break;
        }
        visited.add("".concat(knots[knots.length - 1][0], " ").concat(knots[knots.length - 1][1]));
    }
});
console.log(visited.size);
