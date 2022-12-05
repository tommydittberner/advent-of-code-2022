import * as fs from 'fs';
const input = fs.readFileSync('1_input.txt','utf8');

let res = new Map<number, number>();
let currSum = 0;
let currIdx = 1;

input.split('\n').forEach(entry => {
    if (entry !== '') {
        currSum += parseInt(entry);
    } else {
        res.set(currIdx, currSum);
        currIdx++;
        currSum = 0;
    }
});

let elfWithMaxValue: number[] = [0];

const sortedArr = Array.from(res.values()).sort((a, b) => b - a);

// Teil 1
console.log(sortedArr[0]);

// Teil 2
console.log(sortedArr.slice(0, 3).reduce((sum, curr) => sum + curr));

