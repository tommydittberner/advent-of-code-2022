import readInput from '../readInput';

const games: string[] = readInput("2_input.txt");

const points = new Map<string, number>();
points.set('A', 1);
points.set('B', 2);
points.set('C', 3);
points.set('X', 1);
points.set('Y', 2);
points.set('Z', 3);

const winning = new Map<number, number>();
winning.set(3, 1);
winning.set(2, 3);
winning.set(1, 2);

let totalPoints = 0;
games.forEach(entry => {
    let moves = entry.split(' ');

    let moveA = points.get(moves[0]);
    let moveB = points.get(moves[1]);

    if (moveA && moveB) {
        if (moveA === moveB) {
            totalPoints += 3 + moveB;
        } else if (winning.get(moveA) === moveB) {
            totalPoints += 6 + moveB;
        } else {
            totalPoints += moveB;
        }
    }
});

console.log(totalPoints);

