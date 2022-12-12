// https://adventofcode.com/2022/day/9
import * as fs from 'fs';
const instructions: string[] = fs.readFileSync('9_input.txt','utf8').split('\n');

let visited = new Set<string>();

let knots: number[][] = [];
// create 10 knots at the starting position
for (let i = 0; i < 10; i++) {
    knots.push([0, 0]);
}

function move(x: number, y: number) {
    // update head
    knots[0][0] += x;
    knots[0][1] += y;

    for(let j = 1; j < 10; j++) {
        // define head of current tail
        let hX = knots[j - 1][0];
        let hY = knots[j - 1][1];
        // define current tail
        let tX = knots[j][0];
        let tY = knots[j][1];

        if(moveTail(hX, hY, tX, tY)) {
            // move 0, -1 or 1
            tX += hX === tX ? 0 : (hX - tX) / (Math.abs(hX - tX));
            tY += hY === tY ? 0 : (hY - tY) / (Math.abs(hY - tY));
        }

        knots[j] = [tX, tY];
    }

}

function moveTail(hX: number, hY: number, tX: number, tY: number) {
    // returns true if tail is behind head by 2 (or more) on any achsis
    return Math.abs(hX - tX) > 1 || Math.abs(hY - tY) > 1;
}

instructions.forEach(i => {
    let direction: string = i.split(' ')[0];
    let amount: number = parseInt(i.split(' ')[1]);

    for (let i = 0; i < amount; i++) {
        switch(direction) {
            case 'U':
                move(0, -1);
                break;
            case 'R':
                move(1, 0);
                break;
            case 'D': 
                move(0, 1);
                break;
            case 'L':
                move(-1, 0);
                break;
        }
        visited.add(`${knots[knots.length - 1][0]} ${knots[knots.length - 1][1]}`);
    }
});
console.log(visited.size);