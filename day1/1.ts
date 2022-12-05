// https://adventofcode.com/2022/day/1

import * as fs from 'fs';
const input = fs.readFileSync('1_input.txt','utf8').split('\n');

let res = new Map<number, number>();
let currSum = 0;

input.forEach((entry, idx) => {
    if (entry !== '') {
        currSum += parseInt(entry);
    } else {
        res.set(idx + 1, currSum);
        currSum = 0;
    }
});

const sortedArr = Array.from(res.values()).sort((a, b) => b - a);

// Part 1
console.log(sortedArr[0]);

// Part 2
console.log(sortedArr.slice(0, 3).reduce((sum, curr) => sum + curr));

