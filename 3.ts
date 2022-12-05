import * as fs from 'fs';
const input = fs.readFileSync('3_input.txt','utf8');
const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lines : string[] = input.split('\n');
let sum = 0;

for (let line of lines) {
    console.log(line);
    const firstHalf = line.substring(0, line.length / 2);
    const secondHalf = line.substring(line.length / 2, line.length);

    for(let char of firstHalf.split('')) {
        if (secondHalf.includes(char)) {
            sum += values.indexOf(char) + 1;
            console.log(char, values.indexOf(char) + 1);
            break;
        }
    }
}

console.log(`Total sum = ${sum}`);


