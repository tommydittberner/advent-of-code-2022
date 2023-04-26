"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = void 0;
var fs = require("fs");
var path = require("path");
function readInput(filename, customRegex) {
    var res = filename.match(/[0-9]{1,2}/);
    if (!res) {
        throw new Error("file was not found or did not match format day_<num>.txt");
    }
    return fs
        .readFileSync(path.join(__dirname, "day_".concat(res[0].padStart(2, "0")), filename), 'utf8')
        .split(customRegex ? customRegex : /\r?\n|\r/g);
}
exports.readInput = readInput;
exports.default = readInput;
