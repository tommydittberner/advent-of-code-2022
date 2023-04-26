"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var games = (0, readInput_1.default)("2_input.txt");
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
