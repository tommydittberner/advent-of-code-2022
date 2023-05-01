import readInput from '../readInput';
const input: any = readInput("13_input.txt")
    .filter(ele => ele !== '')
    .map(i => JSON.parse(i));

// add divider packets
input.push([[2]]);
input.push([[6]]);

const res: string[] = input
    .sort((a: any, b: any) => compare(a,b))
    .map((ele: any) => JSON.stringify(ele));

const div1 = res.findIndex(i => i === "[[2]]") + 1;
const div2 = res.findIndex(i => i === "[[6]]") + 1

console.log(div1 * div2);

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