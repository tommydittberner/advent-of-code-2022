"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/9
var fs = require("fs");
var instructions = fs.readFileSync('9_input.txt', 'utf8').split('\n');
var visited = new Set();
var hX = 0;
var hY = 0;
var tX = 0;
var tY = 0;
function move(x, y) {
    hX += x;
    hY += y;
    if (moveTail(hX, hY, tX, tY)) {
        // move 0, -1 or 1
        tX += hX === tX ? 0 : (hX - tX) / (Math.abs(hX - tX));
        tY += hY === tY ? 0 : (hY - tY) / (Math.abs(hY - tY));
    }
}
function moveTail(hX, hY, tX, tY) {
    // returns true if tail is behind head by 2 (or more) on any achsis
    return Math.abs(hX - tX) > 1 || Math.abs(hY - tY) > 1;
}
instructions.forEach(function (i) {
    var direction = i.split(' ')[0];
    var amount = parseInt(i.split(' ')[1]);
    for (var i_1 = 0; i_1 < amount; i_1++) {
        switch (direction) {
            case 'U':
                move(0, -1);
                break;
            case 'R':
                move(1, 0);
                break;
            case 'D':
                move(0, 1);
                break;
            case 'L':
                move(-1, 0);
                break;
        }
        visited.add("x".concat(tX, " y").concat(tY));
    }
});
console.log(visited.size);
/* INITIAL VERSION
import * as fs from 'fs';
const instructions: string[] = fs.readFileSync('9_input.txt','utf8').split('\n');

let visited = new Set<string>();

let headX = 0;
let headY = 0;
let tailX = 0;
let tailY = 0;

//TODO
instructions.forEach(i => {
    let direction: string = i.split(' ')[0];
    let amount: number = parseInt(i.split(' ')[1]);

    for (let i = 0; i < amount; i++) {
        switch(direction) {
            case 'U':
                // if head is ahead, move tail
                if (headY < tailY) {
                    tailY--;
                    // adjust off-achsis
                    if (headX !== tailX) {
                        tailX = headX;
                    }
                }
                // move head further along
                headY--;

                break;
            case 'R':
                if (headX > tailX) {
                    tailX++;
                    if (headY !== tailY) {
                        tailY = headY;
                    }
                }
                headX++;

                break;
            case 'D':
                if (headY > tailY) {
                    tailY++;
                    if (headX !== tailX) {
                        tailX = headX;
                    }
                }
                headY++

                break;
            case 'L':
                if (headX < tailX) {
                    tailX--;
                    if (headY !== tailY) {
                        tailY = headY;
                    }
                }
                headX--;

                break;
        }
        visited.add(`x${tailX} y${tailY}`);
    }
});

*/ 
