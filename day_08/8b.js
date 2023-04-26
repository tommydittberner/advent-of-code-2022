"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var rows = (0, readInput_1.default)('8_input.txt');
var grid = [];
rows.forEach(function (tree) { return grid.push(tree.split('')); });
// outer grid already added
var height = grid.length;
var width = grid[0].length;
var highestScore = 0;
// columns (minus top and bottom)
for (var i = 1; i < height - 1; i++) {
    // rows (minus left and right)
    for (var j = 1; j < width - 1; j++) {
        var curr = grid[i][j];
        var scoreTop = 0;
        var scoreRight = 0;
        var scoreBottom = 0;
        var scoreLeft = 0;
        // test top
        for (var t = i - 1; t >= 0; t--) {
            scoreTop += 1;
            if (grid[t][j] >= curr) {
                break;
            }
        }
        // test right
        for (var r = j + 1; r <= width - 1; r++) {
            scoreRight += 1;
            if (grid[i][r] >= curr) {
                break;
            }
        }
        // test bottom
        for (var b = i + 1; b <= height - 1; b++) {
            scoreBottom += 1;
            if (grid[b][j] >= curr) {
                break;
            }
        }
        // test left
        for (var l = j - 1; l >= 0; l--) {
            scoreLeft += 1;
            if (grid[i][l] >= curr) {
                break;
            }
        }
        var score = scoreTop * scoreRight * scoreBottom * scoreLeft;
        if (score > highestScore) {
            highestScore = score;
        }
        score = 0;
    }
}
console.log(highestScore);
