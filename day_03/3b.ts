import readInput from '../readInput';

const allLines: string[] = readInput("3_input.txt");
const values : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let sum = 0;

let groups: string [][] = [];
let currGroup: string [] = [];
allLines.forEach((line, i) => {
    currGroup.push(line);
    if (i % 3 === 2) {
        groups.push(currGroup);
        currGroup = [];
    }
});

groups.forEach(group => {
    let commonCharacters = new Set<string>();

    group.forEach((elve, i) => {
        const currentChars = elve.split('');

        if (i % 3 === 0) {
            // add all characters of first line into set
            currentChars.forEach(c => commonCharacters.add(c));
        } else {
            // remove characters not common in other lines from set
            commonCharacters.forEach(c => {
                if (!currentChars.includes(c)) {
                    commonCharacters.delete(c);
                }
            })
        }
    });

    sum += values.indexOf(commonCharacters.values().next().value) + 1;
});


console.log(`Total sum = ${sum}`);