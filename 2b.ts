import * as fs from 'fs';
const input = fs.readFileSync('2_input.txt','utf8');

let games: string[] = input.split('\n');

const points = new Map<string, number>();
points.set('A', 1);
points.set('B', 2);
points.set('C', 3);

const winning = new Map<number, number>();
winning.set(3, 1);
winning.set(2, 3);
winning.set(1, 2);

const losing = new Map<number, number>();
losing.set(1, 3);
losing.set(3, 2);
losing.set(2, 1);

let totalPoints = 0;
games.forEach(entry => {
    let data = entry.split(' ');

    let moveOpponent = points.get(data[0]);
    let outcome = data[1];
    
    if (moveOpponent && outcome) {
        let myMove = winning.get(moveOpponent);
        let myLoseMove = losing.get(moveOpponent);

        if (outcome === 'Y') {
            totalPoints += 3 + moveOpponent;
        } else if (myMove && outcome === 'Z') {
            totalPoints += 6 + myMove;
        } else if (myLoseMove && outcome === 'X') {
            totalPoints += myLoseMove;
        }
    }
});

console.log(totalPoints);

