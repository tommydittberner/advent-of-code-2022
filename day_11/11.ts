// https://adventofcode.com/2022/day/11
import * as fs from 'fs';
const input: string[][] = fs.readFileSync('11_input.txt','utf8')
    .split('\n\n')
    .map(monkey => monkey.split('\n'));

let numOfRounds = 20;
let numOfMonkeys: number;
let monkeyBusiness: number[] = []; 

let monkeys = new Map<number, number[]>();

function parseInput() {
    input.forEach((monkey, i) => {
        monkeys.set(
            i, 
            monkey[1]
                .split(':')[1]
                .split(',')
                .map(ele => parseInt(ele.trim()))
        );
    });
    numOfMonkeys = monkeys.size;
    
    // fill initally with 0s
    for(let i = 0; i < numOfMonkeys; i++) {
        monkeyBusiness.push(0);
    }
}

function passItems() {
    for (let round = 1; round <= numOfRounds; round++) {
        for (let i = 0; i < numOfMonkeys; i++) {
            let items: number[] = monkeys.get(i)!;
            
            items?.forEach(wL => {
                monkeyBusiness[i] += 1;

                // worry level adjusted by operation
                let op: string[] = input[i][2].split('= old ')[1].split(' ');
                let rightSide: number = op[1] === 'old' ? wL : parseInt(op[1]);
                if (op[0] === '+') {
                    wL = wL + rightSide;
                } else {
                    wL = wL * rightSide;
                }
                // item was handled without damage -> worry level sinks
                wL = Math.trunc(wL / 3);

                // test by division
                let divisor: number = parseInt(input[i][3].split('by ')[1]);
                let goalMonkey: number;
                let goalValues: number[];
                
                if (wL % divisor === 0) {
                    goalMonkey = parseInt(input[i][4].split('monkey ')[1]);

                } else {
                    goalMonkey = parseInt(input[i][5].split('monkey ')[1]);
                }
                
                // modify lists
                goalValues = monkeys.get(goalMonkey)!;
                goalValues.push(wL);
                monkeys.set(goalMonkey, goalValues);
            });

            // empty monkey's items list afterwards, since every ele was passed
            monkeys.set(i, []);
        }
    }
}

parseInput();
passItems();

console.log(monkeyBusiness
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr)
);
