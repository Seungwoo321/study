'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the queue function below.
function Queue() {
    const data = [];
    this.put = function (d) {
        data.push(d);
    };

    this.pop = function () {
        data.shift()
    };

    this.print = function () {
        return data
    }

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);
    const q = new Queue();
    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();
        const sArray = s.split(' ');

        if (sArray[0] === 1) {
            q.put(sArray[1]);
        }
        if (sArray[0] === 2) {
            q.pop();
        }
        if (sArray[0] === 3) {
            let result = q.print();
            ws.write(result + "\n");
        }
    }

    ws.end();
}
