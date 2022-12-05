"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('2_input.txt', 'utf8');
var games = input.split('\n');
var points = new Map();
points.set('A', 1);
points.set('B', 2);
points.set('C', 3);
points.set('X', 1);
points.set('Y', 2);
points.set('Z', 3);
var winning = new Map();
winning.set(3, 1);
winning.set(2, 3);
winning.set(1, 2);
var totalPoints = 0;
games.forEach(function (entry) {
    var moves = entry.split(' ');
    var moveA = points.get(moves[0]);
    var moveB = points.get(moves[1]);
    if (moveA && moveB) {
        if (moveA === moveB) {
            totalPoints += 3 + moveB;
        }
        else if (winning.get(moveA) === moveB) {
            totalPoints += 6 + moveB;
        }
        else {
            totalPoints += moveB;
        }
    }
});
console.log(totalPoints);
