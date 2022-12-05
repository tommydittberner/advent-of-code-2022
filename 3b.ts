import * as fs from 'fs';
const input = fs.readFileSync('3_input.txt','utf8');
const values : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allLines : string[] = input.split('\n');
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