'use strict';

const fs = require('fs');
let inputString = '';
let currentLine = 0;
const INPUT_FILE = process.argv[2]

fs.readFile(INPUT_FILE, 'utf8', (err, data) => {
    inputString = data.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main()
})
function readLine() {
    return inputString[currentLine++];
}
function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        let result = abbreviation(a, b);

        console.log(result)

    }
}




// Complete the abbreviation function below.
function abbreviation(a, b) {
    if (a === b) return 'YES';
    let arrayA = a.split('')
    let arrayB = b.split('')
    
    let i = 0;
    const memo = {
        [arrayA.length - 1]: {
            [arrayB.length - 1]: false
        }
    }
    
    let list = [
        [arrayA.length - 1, arrayB.length - 1]
    ]
    while (i < arrayA.length - 1) {
        if (!list.length) break
        let tmp = []
        list.forEach(([indexA, indexB]) => {

            if (!memo[indexA][indexB]) {
                if (arrayA[indexA] === arrayB[indexB]) {
      
                    tmp.push([indexA - 1, indexB - 1])
                    memo[indexA - 1] = {
                        [indexB - 1]: false
                    }
                    memo[indexA][indexB] = true
                } else if (arrayA[indexA].toUpperCase() === arrayB[indexB]) {
      
                    tmp.push([indexA - 1, indexB - 1])                    
                    tmp.push([indexA - 1, indexB])                
                    memo[indexA - 1] = {
                        [indexB - 1]: false,
                        [indexB]: false
                    }
                    memo[indexA][indexB] = true

                } else if (arrayA[indexA].toLowerCase() === arrayA[indexA]) {
    
                    tmp.push([indexA - 1, indexB])  
                    memo[indexA - 1] = {
                        [indexB]: false
                    }
                    memo[indexA][indexB] = true
                } else {
                    memo[indexA][indexB] = true
                }
            }
        })
        list = tmp
        i++;
    }
    return list.some(indexes => indexes[0] < 1 && indexes[1] < 1) ? 'YES' : 'NO'
}








