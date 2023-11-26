import readInput from '../readInput';

const map: string[][] = readInput('12_input.txt')
    .map(row => row.split(""));


let startP: number[];
let endP: number[];

for (let y = 0; y < map.length; y++){
    for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === "S") {
            startP = [x, y];
        }
        if (map[y][x] === "E") {
            endP = [x, y];
        }
    }
}

function getNextNeighbor(x: number, y: number): number[] {
    // top, right, bottom, left
    const directionsToCheck = [[0, -1], [1, 0], [0, 1], [-1, 0]];

    for (let dir in directionsToCheck) {
        let [x0, y0] = dir;

        let x1: number = x + parseInt(x0);
        let y1: number = y + parseInt(y0);

        // oob check
        if (x1 < 0 || x1 > map[0].length || y1 < 0 || y1 > map.length) {
            continue;
        }

        // next step
        if (getHeight(map[y1][x1]) - getHeight(map[y][x]) === 1) {
            return [x1, y1];
        }
    }
}

function dijkstra() {

}

function getHeight(char: string): number {
    return "SabcdefghijklmnopqrstuvwxyzE".indexOf(char) ?? -1;
}



