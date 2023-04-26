import readInput from '../readInput';

const input: string[] = readInput("1_input.txt");

let res = new Map<number, number>();
let currSum: number = 0;

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