"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/6
var fs = require("fs");
var chars = fs.readFileSync('6_input.txt', 'utf8').split('');
var sizeOfPack = 14;
for (var i = sizeOfPack - 1; i < chars.length; i++) {
    var lastFourSet = new Set();
    for (var j = sizeOfPack - 1; j >= 0; j--) {
        lastFourSet.add(chars[i - j]);
    }
    if (lastFourSet.size === sizeOfPack) {
        console.log(i + 1);
        break;
    }
}
;
