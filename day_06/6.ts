import readInput from '../readInput';
import * as fs from 'fs';
import * as path from 'path';
const chars = fs.readFileSync(path.join(__dirname, '6_input.txt'), 'utf8').split('');
//const chars: string[] = readInput('6_input.txt', new RegExp(/''/g));

const sizeOfPack = 4;
for (let i = sizeOfPack - 1; i < chars.length; i++) {
    let lastFourSet = new Set<string>();

    for (let j = sizeOfPack -1; j >= 0; j--) {
        lastFourSet.add(chars[i - j]);
    }

    if (lastFourSet.size === sizeOfPack) {
        console.log(i + 1);
        break;
    }
};
