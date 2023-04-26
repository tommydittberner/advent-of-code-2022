"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var rows = (0, readInput_1.default)('12_input.txt');
var width = rows[0].length;
var full = rows.join("").split("");
var START = full.findIndex(function (l) { return l === "S"; });
var END = full.findIndex(function (l) { return l === "E"; });
var startP = [Math.floor(START / width), START % width];
var currP = __spreadArray([], startP, true);
var endP = [Math.floor(END / width), END % width];
console.log(startP, currP, endP);
