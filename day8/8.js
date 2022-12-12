"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/8
var fs = require("fs");
var rows = fs.readFileSync('8_input.txt', 'utf8').split('\n');
var grid = [];
rows.forEach(function (tree) { return grid.push(tree.split('')); });
// outer grid already added
var height = grid.length;
var width = grid[0].length;
var sum = height * 2 + (width - 2) * 2;
// columns (minus top and bottom)
for (var i = 1; i < height - 1; i++) {
    // rows (minus left and right)
    for (var j = 1; j < width - 1; j++) {
        var curr = grid[i][j];
        var blockedTop = false;
        var blockedRight = false;
        var blockedBottom = false;
        var blockedLeft = false;
        // test top
        for (var t = i - 1; t >= 0; t--) {
            if (grid[t][j] >= curr) {
                blockedTop = true;
            }
        }
        // test right
        for (var r = j + 1; r <= width - 1; r++) {
            if (grid[i][r] >= curr) {
                blockedRight = true;
            }
        }
        // test bottom
        for (var b = i + 1; b <= height - 1; b++) {
            if (grid[b][j] >= curr) {
                blockedBottom = true;
            }
        }
        // test left
        for (var l = j - 1; l >= 0; l--) {
            if (grid[i][l] >= curr) {
                blockedLeft = true;
            }
        }
        if (!(blockedTop && blockedRight && blockedBottom && blockedLeft)) {
            sum += 1;
        }
    }
}
console.log(sum);
