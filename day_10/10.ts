import readInput from '../readInput';
const operations: string[] = readInput('10_input.txt');

const importantCycles = new Map<number, number>([
    [20, 0],[60, 0],[100, 0],[140, 0],[180, 0],[220, 0],
]);

let sum = 0;
let x: number = 1;
let cycle: number = 0;
let cycleRunning: boolean = false;

for (let i = 0; i < operations.length; i++) {
    let op = operations[i].split(' ');
    ++cycle;

    if (Array.from(importantCycles.keys()).includes(cycle)) {
        sum += cycle * x;
    }

    if (op[0] !== 'noop') {
        cycleRunning = !cycleRunning;
        if (!cycleRunning) {
            x += parseInt(op[1]);
        } else {
            i--;
        }
    }
}

console.log(sum);

