import readInput from '../readInput';
const pairs: string[] = readInput("13_input.txt", new RegExp(/\r?\n\r?\n/g));
let sum = 0;

pairs.forEach((pair, idx) => {
    const sides = pair.split(new RegExp(/\r?\n/g));
    let res = compare(JSON.parse(sides[0]), JSON.parse(sides[1]));

    if (res === -1) {
        sum += idx + 1;
    }
});

console.log(sum);

function compare (left: any, right: any): number {
    if (typeof left === 'number' && typeof right === 'number') {
        return left === right ? 0 : left < right ? -1 : 1;
    } else if (typeof left === 'number') {
        return compare([left], right);
    } else if (typeof right === 'number') {
        return compare(left, [right]);
    } else {
        const shortestSideLength = Math.min(left.length, right.length);

        for (let i = 0; i < shortestSideLength; i++) {
          const res = compare(left[i], right[i]);
          if (res !== 0) {
            return res;
          }
        }

        return left.length - right.length === 0 
            ? 0 
            : left.length < right.length ? -1 : 1;
    }
};