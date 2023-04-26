import readInput from '../readInput';

const rows: string[] = readInput('12_input.txt');

const width = rows[0].length;
const full = rows.join("").split("");

const START = full.findIndex(l => l === "S");
const END = full.findIndex(l => l === "E");

const startP = [Math.floor(START / width), START % width];
const currP = [...startP];
const endP = [Math.floor(END / width), END % width];

console.log(startP, currP, endP);