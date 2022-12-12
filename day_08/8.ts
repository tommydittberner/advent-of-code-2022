// https://adventofcode.com/2022/day/8
import * as fs from 'fs';
const rows: string[] = fs.readFileSync('8_input.txt','utf8').split('\n');

let grid: string[][] = [];
rows.forEach(tree => grid.push(tree.split('')));

// outer grid already added
const height = grid.length;
const width = grid[0].length;
let sum = height * 2 + (width - 2) * 2;


// columns (minus top and bottom)
for(let i = 1; i < height -1; i++) {
    // rows (minus left and right)
    for(let j = 1; j < width -1; j++) {
        let curr = grid[i][j];
        let blockedTop = false;
        let blockedRight = false;
        let blockedBottom = false;
        let blockedLeft = false;

        // test top
        for (let t = i - 1; t >= 0; t--) {
            if (grid[t][j] >= curr) {
                blockedTop = true;
            }
        }

        // test right
        for (let r = j + 1; r <= width -1; r++) {
            if (grid[i][r] >= curr) {
                blockedRight = true;
            }
        }

        // test bottom
        for (let b = i + 1; b <= height - 1; b++) {
            if (grid[b][j] >= curr) {
                blockedBottom = true;
            }
        }

        // test left
        for (let l = j - 1; l >= 0; l--) {
            if (grid[i][l] >= curr) {
                blockedLeft = true;
            }
        }

        if (!(blockedTop && blockedRight && blockedBottom && blockedLeft)) {
            sum += 1;
        }
    }
}
console.log(sum);

