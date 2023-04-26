import readInput from '../readInput';

const input: string[] = readInput("5_input.txt", new RegExp(/\r?\n\r?\n/g));

const start = input[0];
const orders = input[1];

function getRowsBottomUp(lines: string[]): string[][]  {

    const rows: string[][] = [];
    while(lines.length > 0) {
        let currLine = lines.pop()?.split('')!;
        let currRow = [];
        for (let idx = 1; idx < currLine.length ; idx += 4) {
            currRow.push(currLine[idx]);
        }
        rows.push(currRow);
    }
    return rows;
}

function transposeRowsToStacks(rows: string[][]): string[][] {
    let stacks: string[][] = [];

    for(let i = 0; i < rows[0].length; i++) {
        let currStack = [];
        for(let j = 0; j < rows.length; j++) {
            if (rows[j][i] !== ' ') {
                currStack.push(rows[j][i]);
            }
        } 
        stacks.push(currStack);
    }
    return stacks;
}

function moveCrane(stacks: string[][], orders: number[]): string[][] {
    for (let i = 0; i < orders.length; i += 3) {
        let numToMove = orders[i];
        for (let j = 0; j < numToMove; j++) {
            let toMove = stacks[orders[i + 1] - 1].pop()!
            stacks[orders[i + 2] - 1].push(toMove)
        }
    };
    return stacks;
}

let numOfStacks = parseInt(start.split(' ').filter(i => i !== '').pop()!);
let lines = start.split('\n');
// remove numbers
lines.pop();

const rows = getRowsBottomUp(lines);
let stacks = transposeRowsToStacks(rows);

// split into operations
const orderNumbers = orders.split(new RegExp('[a-z]+'))
.filter(ele => ele !== '')
.map(ele => parseInt(ele.trim()));

stacks = moveCrane(stacks, orderNumbers);

let output = '';
stacks.forEach(s => output += s.pop());
console.log(output);
