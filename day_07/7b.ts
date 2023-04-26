import readInput from '../readInput';
const lines: string[] = readInput('7_input.txt');

let sizes = new Map<string, number>();
let children = new Map<string, string[]>();
let path: string[] = [];

lines.forEach(line => {
    let parts: string[] = line.split(' ');

    if (parts[0] === '$') {
        if (parts[1] === 'cd') {
            if (parts[2] === '..') {
                path.pop();
            } else {
                path.push(parts[2]);
            }
        }
        return;
    }
   
    let absolutePath = path.join('_');

    // initially set for each new dir
    if (!children.get(absolutePath)) {
        children.set(absolutePath, []);
    }

    if (parts[0] !== 'dir') {
        let size: number = sizes.get(absolutePath) || 0;
        size += parseInt(parts[0]);
        sizes.set(absolutePath, size);
    } else {
        let childs: string[] = children.get(absolutePath)!;
        childs.push(`${absolutePath}_${parts[1]}`);
        children.set(absolutePath, childs);
    }
});

function dfs(key: string, size: number) {
    //starting size
    let childNodes = children.get(key);
    size = sizes.get(key) || 0;

    childNodes?.forEach(node => {
        size += dfs(node, size);
    })

    return size;
}

const freeSpace = 70_000_000 - dfs("/", 0);
const spaceToFree = 30_000_000 - freeSpace;

let nearestBiggerDirSize = 0;

children.forEach((v, k) => {
    let size = 0;
    size += dfs(k, size);

    if (nearestBiggerDirSize === 0 || 
        (size >= spaceToFree && spaceToFree < nearestBiggerDirSize)) {
        nearestBiggerDirSize = size;
    }
});

console.log(nearestBiggerDirSize);