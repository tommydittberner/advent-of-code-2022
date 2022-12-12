// https://adventofcode.com/2022/day/8
import * as fs from 'fs';
const rows: string[] = fs.readFileSync('8_input.txt','utf8').split('\n');

let grid: string[][] = [];
rows.forEach(tree => grid.push(tree.split('')));

// outer grid already added
const height = grid.length;
const width = grid[0].length;

let highestScore = 0;

// columns (minus top and bottom)
for(let i = 1; i < height -1; i++) {
    // rows (minus left and right)
    for(let j = 1; j < width -1; j++) {
        let curr = grid[i][j];

        let scoreTop = 0;
        let scoreRight = 0;
        let scoreBottom = 0;
        let scoreLeft = 0;

        // test top
        for (let t = i - 1; t >= 0; t--) {
            scoreTop += 1;
            if (grid[t][j] >= curr) {
                break;
            }
        }

        // test right
        for (let r = j + 1; r <= width -1; r++) {
            scoreRight += 1;
            if (grid[i][r] >= curr) {
                break;
            }
        }

        // test bottom
        for (let b = i + 1; b <= height - 1; b++) {
            scoreBottom += 1;
            if (grid[b][j] >= curr) {
                break;
            }
        }

        // test left
        for (let l = j - 1; l >= 0; l--) {
            scoreLeft += 1;
            if (grid[i][l] >= curr) {
                break;
            }
        }
        
        let score = scoreTop * scoreRight * scoreBottom * scoreLeft;
        if (score > highestScore) {
            highestScore = score;
        }    
        score = 0;
    }
}

console.log(highestScore);

