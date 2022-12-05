"use strict";
// https://adventofcode.com/2022/day/3
exports.__esModule = true;
var fs = require("fs");
var allLines = fs.readFileSync('3_input.txt', 'utf8').split('\n');
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sum = 0;
var groups = [];
var currGroup = [];
allLines.forEach(function (line, i) {
    currGroup.push(line);
    if (i % 3 === 2) {
        groups.push(currGroup);
        currGroup = [];
    }
});
groups.forEach(function (group) {
    var commonCharacters = new Set();
    group.forEach(function (elve, i) {
        var currentChars = elve.split('');
        if (i % 3 === 0) {
            // add all characters of first line into set
            currentChars.forEach(function (c) { return commonCharacters.add(c); });
        }
        else {
            // remove characters not common in other lines from set
            commonCharacters.forEach(function (c) {
                if (!currentChars.includes(c)) {
                    commonCharacters["delete"](c);
                }
            });
        }
    });
    sum += values.indexOf(commonCharacters.values().next().value) + 1;
});
console.log("Total sum = ".concat(sum));
