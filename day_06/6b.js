"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chars = fs.readFileSync(path.join(__dirname, '6_input.txt'), 'utf8').split('');
//const chars: string[] = readInput('6_input.txt', '');
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
