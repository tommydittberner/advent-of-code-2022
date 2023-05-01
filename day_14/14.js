"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readInput_1 = require("../readInput");
var input = (0, readInput_1.default)('14_input.txt');
var SOURCE = '+';
var AIR = '.';
var ROCK = '#';
var SAND = 'o';
var rocks = input.map(function (ele) { return ele.split(' -> '); });
var allValues = rocks.flat(1);
var allX = allValues.map(function (ele) { return parseInt(ele.split(',')[0]); });
var allY = allValues.map(function (ele) { return parseInt(ele.split(',')[1]); });
var x0 = Math.min.apply(Math, allX);
var x1 = Math.max.apply(Math, allX) + 1;
var y0 = 0;
var y1 = Math.max.apply(Math, allY) + 1;
var map = Array(y1)
    .fill(null)
    .map(function () { return Array(x1 - x0)
    .fill(AIR); });
function drawMap() {
    map.forEach(function (row, idx) {
        console.log(idx + " " + row.join(''));
    });
}
function draw() {
    drawSandSource();
    drawRocks();
    dropSand();
    //drawMap();
}
function drawSandSource() {
    map[0][500 - x0] = SOURCE;
}
function drawRocks() {
    rocks.forEach(function (rockData) {
        var points = rockData.map(function (rock) {
            var _a = rock.split(','), x = _a[0], y = _a[1];
            return [parseInt(x) - x0, parseInt(y) - y0];
        });
        var prevX = null;
        var prevY = null;
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var _a = points_1[_i], x = _a[0], y = _a[1];
            if (prevX === null) {
                map[y][x] = ROCK;
            }
            else {
                var _b = [x - prevX, y - prevY], dX = _b[0], dY = _b[1];
                if (dY === 0) {
                    for (var i = 0; i < Math.abs(dX); i++) {
                        map[y][dX > 0 ? x - i : x + i] = ROCK;
                    }
                }
                else {
                    for (var i = 0; i < Math.abs(dY); i++) {
                        map[dY > 0 ? y - i : y + i][x] = ROCK;
                    }
                }
            }
            prevX = x;
            prevY = y;
        }
    });
}
function dropSand() {
    var _a = [0, 500 - x0], startY = _a[0], startX = _a[1];
    var complete = false;
    var count = 0;
    while (!complete) {
        var rest = false;
        var _b = [startY, startX], currY = _b[0], currX = _b[1];
        while (!rest) {
            if (currX - 1 < 0 || currX + 1 > x1 - x0 - 1) {
                complete = true;
                count -= 1;
                break;
            }
            if (map[currY + 1][currX] === AIR) {
                currY += 1;
            }
            else if (map[currY + 1][currX - 1] === AIR) {
                currY += 1;
                currX -= 1;
            }
            else if (map[currY + 1][currX + 1] === AIR) {
                currY += 1;
                currX += 1;
            }
            else {
                map[currY][currX] = SAND;
                rest = true;
            }
        }
        count += 1;
    }
    console.log(count);
}
draw();
