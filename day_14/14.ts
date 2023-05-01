import readInput from '../readInput';
const input: string[] = readInput('14_input.txt');

const SOURCE = '+';
const AIR = '.';
const ROCK = '#';
const SAND = 'o';

const rocks = input.map(ele => ele.split(' -> '));
const allValues = rocks.flat(1);
const allX: number[] = allValues.map((ele) => parseInt(ele.split(',')[0]));
const allY: number[] = allValues.map((ele) => parseInt(ele.split(',')[1]));

const x0 = Math.min(...allX);
const x1 = Math.max(...allX) + 1;
const y0 = 0;
const y1 = Math.max(...allY) + 1;

let map: string[][] = Array(y1)
    .fill(null)
    .map(() => Array(x1 - x0)
    .fill(AIR));

function drawMap() {
    map.forEach((row, idx) => {
        console.log(idx + " " + row.join(''));
    });
}

function draw() {
    drawSandSource();
    drawRocks();
    dropSand();
    //drawMap();
}

function drawSandSource() {
    map[0][500 - x0] = SOURCE;
}

function drawRocks() {

    rocks.forEach(rockData => {
        const points = rockData.map(rock => {
            const [x, y] = rock.split(',');
            return [parseInt(x) - x0, parseInt(y) - y0];
        });

        let prevX = null;
        let prevY = null;

        for (const [x, y] of points) {
            if (prevX === null) {
                map[y][x] = ROCK;
            } else {
                const [dX, dY] = [x - prevX!, y - prevY!];
                if (dY === 0) {
                    for(let i = 0; i < Math.abs(dX); i++){
                        map[y][dX > 0 ? x-i : x+i] = ROCK;
                    }
                } else {
                    for(let i = 0; i < Math.abs(dY); i++){
                        map[dY > 0 ? y-i : y+i][x] = ROCK;
                    }
                }
            }
            prevX = x;
            prevY = y;
        }
    });
}

function dropSand() {
    const [startY, startX] = [0, 500 - x0];
    
    let complete = false;
    let count = 0;


    while(!complete) {
        let rest = false;
        let [currY, currX] = [startY, startX];

        while(!rest) {
            if (currX - 1 < 0 || currX + 1 > x1 - x0 - 1) {
                complete = true;
                count -= 1;
                break;
            } 
    
            if (map[currY + 1][currX] === AIR) {
                currY += 1;
            } else if (map[currY + 1][currX - 1] === AIR) {
                currY += 1;
                currX -= 1;
            } else if (map[currY + 1][currX + 1] === AIR) {
                currY += 1;
                currX += 1;
            } else {
                map[currY][currX] = SAND;
                rest = true;
            }
        }
        count += 1;
    }

    console.log(count);
}

draw();




