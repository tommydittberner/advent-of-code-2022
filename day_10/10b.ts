import readInput from '../readInput';
const operations: string[] = readInput('10_input.txt');

const output: string[] = [];

let currLine = '';
let x: number = 1;
let cycle: number = 0;
let cycleRunning: boolean = false;

for (let i = 0; i < operations.length; i++) {
    let op = operations[i].split(' ');

    if ([x-1, x, x +1].includes(cycle % 40)) {
        currLine += '#';
    } else {
        currLine += '.';
    }

    ++cycle;

    if (currLine.length === 40) {
        output.push(currLine);
        currLine = '';
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

console.log(output);