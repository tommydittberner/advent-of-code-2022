import * as fs from 'fs';
import * as path from 'path';

export function readInput(filename: string, customRegex?: RegExp | string ): string[] {
    let res = filename.match(/[0-9]{1,2}/);

    if (!res) {
        throw new Error("file was not found or did not match format day_<num>.txt");
    }

    return fs
        .readFileSync(path.join(__dirname, `day_${res[0].padStart(2, "0")}`, filename), 'utf8')
        .split(customRegex ? customRegex : /\r?\n|\r/g);

}

export default readInput;