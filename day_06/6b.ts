// https://adventofcode.com/2022/day/6
import * as fs from 'fs';
const chars: string[] = fs.readFileSync('6_input.txt','utf8').split('');

const sizeOfPack = 14;

for (let i = sizeOfPack -1; i < chars.length; i++) {
    let lastFourSet = new Set<string>();

    for (let j = sizeOfPack - 1; j >= 0; j--) {
        lastFourSet.add(chars[i - j]);
    }

    if (lastFourSet.size === sizeOfPack) {
        console.log(i + 1);
        break;
    }
};