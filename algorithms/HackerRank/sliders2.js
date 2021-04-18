function swapWhite(d, startPuzzle, [x, y]) {
    let target = null;
    let s = startPuzzle.map(rows => rows.slice());
    if (d === 'L') {
        target = s[y][x + 1];
        s[y][x + 1] = s[y][x];
    } else if (d === 'R') {
        target = s[y][x - 1];
        s[y][x - 1] = s[y][x];
    } else if (d === 'U') {
        target = s[y + 1][x];
        s[y + 1][x] = s[y][x];
    } else if (d === 'D') {
        target = s[y - 1][x];
        s[y - 1][x] = s[y][x];
    }
    s[y][x] = target;
    return s
}

function getWhiteXY(arr) {
    const whiteY = arr.findIndex((rows) => rows.indexOf('W') > -1)
    const whiteX = arr[whiteY].indexOf('W')
    return [whiteX, whiteY]
}

function checkSum(letters, sum) {
    const directions = {
        L: 76,
        R: 82,
        U: 85,
        D: 68
    };
    if (letters.length > 0) {
        const code = directions[letters.shift()];
        return checkSum(letters, (sum * 243 + code) % 100000007)
    } else {
        return sum
    }
}

function getDirections([x, y], d, n) {
    const moves = []
    if (x < n - 1 && d !== 'R') {
        moves.push('L')
    }
    if (x > 0 && d !== 'L') {
        moves.push('R')
    }
    if (y < n - 1 && d !== 'D') {
        moves.push('U')
    }
    if (y > 0 && d !== 'U') {
        moves.push('D')
    }
    return moves
}


function slider(startPuzzle, endPuzzle, n) {
    const checkEnd = (values, i) => {
        return values.every((value, j) => {
            return value === endPuzzle[i][j]
        })
    };
    let visited = {};
    let queue = [];
    let white = getWhiteXY(startPuzzle)
    getDirections(white, '', n).forEach(d => {
        visited['root'] = {
            puzzle: startPuzzle,
            white: white
        }
        queue.push(['root', d])
    });
    let done = false
    let sum = 0;

    while (queue.length > 0) {
        const firstNode = queue.shift();
        const newKey = firstNode[0] === 'root' ? firstNode[1] : firstNode[0] + firstNode[1];
        if (!visited[newKey]) {
            const newPuzzle = swapWhite(firstNode[1], visited[firstNode[0]].puzzle, visited[firstNode[0]].white);
            if (newPuzzle.every(checkEnd)) {
                if (!done) {
                    done = true;
                    queue = queue.filter(q => q[0].length === firstNode[0].length)
                    // console.log(newKey)
                    console.log('queue count: ' + queue.length)
                }
                const letters = newKey.split('')
                sum += checkSum(letters, 0);
                console.log(newKey)
            } else if (!done) {
                const white = getWhiteXY(newPuzzle)
                visited[newKey] = {
                    puzzle: newPuzzle,
                    white
                };

                getDirections(white, firstNode[1], n).map(d => {
                    queue.push([newKey, d]);
                });
            }
        }
    }
    // console.log(visited)
    return sum % 100000007
}
let timestamp1 = Date.now();
console.log(slider([['W', 'R'], ['B', 'B']], [['R', 'B'], ['B', 'W']], 2))
console.log(Date.now() - timestamp1 + 'ms');

let timestamp2 = Date.now();
console.log(slider([['W', 'R', 'B', 'B'], ['R', 'R', 'B', 'B'], ['R', 'R', 'B', 'B'], ['R', 'R', 'B', 'B']], [['R', 'R', 'B', 'B'], ['R', 'B', 'B', 'B'], ['R', 'W', 'R', 'B'], ['R', 'R', 'B', 'B']], 4))
console.log(Date.now() - timestamp2 + 'ms');

let timestamp3 = Date.now();
console.log(slider([['B', 'B', 'B'], ['B', 'W', 'R'], ['R', 'R', 'R']], [['R', 'B', 'R'], ['B', 'W', 'B'], ['R', 'B', 'R']], 3))
console.log(Date.now() - timestamp3 + 'ms');

// checkSum('DLURRULDDRUL'.split(''), 0);
// checkSum('RULDDRULDLUR'.split(''), 0);
// checkSum('RULDDLURDRUL'.split(''), 0);

// console.log(slider([['A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A'], ['B', 'W', 'B', 'B'], ['B', 'B', 'B', 'B']], [['B', 'B', 'B', 'B'], ['B', 'W', 'B', 'B'], ['A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A']], 4))
