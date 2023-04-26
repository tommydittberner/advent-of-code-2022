"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var games = (0, readInput_1.default)("2_input.txt");
var points = new Map();
points.set('A', 1);
points.set('B', 2);
points.set('C', 3);
var winning = new Map();
winning.set(3, 1);
winning.set(2, 3);
winning.set(1, 2);
var losing = new Map();
losing.set(1, 3);
losing.set(3, 2);
losing.set(2, 1);
var totalPoints = 0;
games.forEach(function (entry) {
    var data = entry.split(' ');
    var moveOpponent = points.get(data[0]);
    var outcome = data[1];
    if (moveOpponent && outcome) {
        var myMove = winning.get(moveOpponent);
        var myLoseMove = losing.get(moveOpponent);
        if (outcome === 'Y') {
            totalPoints += 3 + moveOpponent;
        }
        else if (myMove && outcome === 'Z') {
            totalPoints += 6 + myMove;
        }
        else if (myLoseMove && outcome === 'X') {
            totalPoints += myLoseMove;
        }
    }
});
console.log(totalPoints);
