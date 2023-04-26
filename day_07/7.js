"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var lines = (0, readInput_1.default)('7_input.txt');
var sizes = new Map();
var children = new Map();
var path = [];
lines.forEach(function (line) {
    var parts = line.split(' ');
    if (parts[0] === '$') {
        if (parts[1] === 'cd') {
            if (parts[2] === '..') {
                path.pop();
            }
            else {
                path.push(parts[2]);
            }
        }
        return;
    }
    var absolutePath = path.join('_');
    // initially set for each new dir
    if (!children.get(absolutePath)) {
        children.set(absolutePath, []);
    }
    if (parts[0] !== 'dir') {
        var size = sizes.get(absolutePath) || 0;
        size += parseInt(parts[0]);
        sizes.set(absolutePath, size);
    }
    else {
        var childs = children.get(absolutePath);
        childs.push("".concat(absolutePath, "_").concat(parts[1]));
        children.set(absolutePath, childs);
    }
});
function dfs(key, size) {
    //starting size
    var childNodes = children.get(key);
    size = sizes.get(key) || 0;
    childNodes === null || childNodes === void 0 ? void 0 : childNodes.forEach(function (node) {
        size += dfs(node, size);
    });
    return size;
}
var resSum = 0;
children.forEach(function (v, k) {
    var size = 0;
    size += dfs(k, size);
    if (size <= 100000) {
        resSum += size;
    }
});
console.log(resSum);
