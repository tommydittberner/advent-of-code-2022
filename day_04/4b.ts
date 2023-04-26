import readInput from '../readInput';

const lines: string[] = readInput("4_input.txt");

let sum = 0;

lines.forEach(line => {
    let elves: string[] = line.split(',');

    const min1: number = parseInt(elves[0].split('-')[0]);
    const min2: number = parseInt(elves[1].split('-')[0]);
    const max1: number = parseInt(elves[0].split('-')[1]);
    const max2: number = parseInt(elves[1].split('-')[1]);

    if (min1 >= min2 && min1 <= max2 ||
        min2 >= min1 && min2 <= max1) {
        sum += 1;
    }
});

console.log(sum);

