// https://adventofcode.com/2022/day/3
import * as fs from 'fs';
const lines: string[] = fs.readFileSync('3_input.txt','utf8').split('\n');
const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let sum = 0;

for (let line of lines) {
    const firstHalf = line.substring(0, line.length / 2);
    const secondHalf = line.substring(line.length / 2, line.length);

    for(let char of firstHalf.split('')) {
        if (secondHalf.includes(char)) {
            sum += values.indexOf(char) + 1;
            break;
        }
    }
}

console.log(`Total sum = ${sum}`);


