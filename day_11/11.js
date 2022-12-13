"use strict";
exports.__esModule = true;
// https://adventofcode.com/2022/day/11
var fs = require("fs");
var input = fs.readFileSync('11_input.txt', 'utf8')
    .split('\n\n')
    .map(function (monkey) { return monkey.split('\n'); });
var numOfRounds = 20;
var numOfMonkeys;
var monkeyBusiness = [];
var monkeys = new Map();
function parseInput() {
    input.forEach(function (monkey, i) {
        monkeys.set(i, monkey[1]
            .split(':')[1]
            .split(',')
            .map(function (ele) { return parseInt(ele.trim()); }));
    });
    numOfMonkeys = monkeys.size;
    // fill initally with 0s
    for (var i = 0; i < numOfMonkeys; i++) {
        monkeyBusiness.push(0);
    }
}
function passItems() {
    for (var round = 1; round <= numOfRounds; round++) {
        var _loop_1 = function (i) {
            var items = monkeys.get(i);
            items === null || items === void 0 ? void 0 : items.forEach(function (wL) {
                monkeyBusiness[i] += 1;
                // worry level adjusted by operation
                var op = input[i][2].split('= old ')[1].split(' ');
                var rightSide = op[1] === 'old' ? wL : parseInt(op[1]);
                if (op[0] === '+') {
                    wL = wL + rightSide;
                }
                else {
                    wL = wL * rightSide;
                }
                // item was handled without damage -> worry level sinks
                wL = Math.trunc(wL / 3);
                // test by division
                var divisor = parseInt(input[i][3].split('by ')[1]);
                var goalMonkey;
                var goalValues;
                if (wL % divisor === 0) {
                    goalMonkey = parseInt(input[i][4].split('monkey ')[1]);
                }
                else {
                    goalMonkey = parseInt(input[i][5].split('monkey ')[1]);
                }
                // modify lists
                goalValues = monkeys.get(goalMonkey);
                goalValues.push(wL);
                monkeys.set(goalMonkey, goalValues);
            });
            // empty monkey's items list afterwards, since every ele was passed
            monkeys.set(i, []);
        };
        for (var i = 0; i < numOfMonkeys; i++) {
            _loop_1(i);
        }
    }
}
parseInput();
passItems();
console.log(monkeyBusiness
    .sort(function (a, b) { return b - a; })
    .slice(0, 2)
    .reduce(function (acc, curr) { return acc * curr; }));
