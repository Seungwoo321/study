function swapMove(d, startPuzzle, [x, y]) {
    const s = startPuzzle.slice();
    const w = 'W'
    let status = false;
    if (d === 'L' && s[y][x + 1]) {
        const target = s[y][x + 1];
        s[y] = s[y].substring(0, x) + target + w + s[y].substring(x + 2);
        status = true;
    } else if (d === 'R' && ~(x - 1)) {
        const target = s[y][x - 1];
        s[y] = s[y].substring(0, x - 1) + w + target + s[y].substring(x + 1);
        status = true;
    } else if (d === 'U' && s[y + 1] && s[y + 1][x]) {
        const target = s[y + 1][x];
        s[y] = s[y].substring(0, x) + target + s[y].substring(x + 1);
        s[y + 1] = s[y + 1].substring(0, x) + w + s[y + 1].substring(x + 1);
        status = true;
    } else if (d === 'D' && ~(y - 1)) {
        const target = s[y - 1][x];
        s[y] = s[y].substring(0, x) + target + s[y].substring(x + 1);
        s[y - 1] = s[y - 1].substring(0, x) + w + s[y - 1].substring(x + 1);
        status = true;
    }
    return {
        status,
        puzzle: () => s.slice()
    }
}

function getWhiteXY(arr) {
    const whiteY = arr.findIndex((rows) => rows.indexOf('W') > -1)
    const whiteX = arr[whiteY].indexOf('W')
    return [whiteX, whiteY]
}

function backDirection (d) {
    if (d === 'L') return 'R'
    if (d === 'R') return 'L'
    if (d === 'U') return 'D'
    if (d === 'D') return 'U'
}

function checkSum (letters, sum) {
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

function filterMove([x, y]) {
    if (x === 0 && y === 0) {
        return ['L', 'U']
    } else if (x === 0) {
        return ['L', 'D', 'U'];
    } else if (y === 0) {
        return ['L', 'R', 'U'];
    } else {
        return ['L', 'R', 'U', 'D'];
    }
}


function slider(startPuzzle, endPuzzle) {
    const checkEnd = (value, index) => value == endPuzzle[index];
    const visited = {};
    const queue = [];
    filterMove(getWhiteXY(startPuzzle)).forEach(d => queue.push([getWhiteXY(startPuzzle), d, startPuzzle, '']));
    let flag = false
    let sum = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        const newKey = node[3] + node[1];
        const move = swapMove(node[1], node[2], node[0]);
        console.log(queue)
        if (move.status && !visited[newKey]) {
            const newPuzzle = move.puzzle()
            if (newPuzzle.every(checkEnd)) {
                if (!flag) {
                    flag = true;
                    queue.filter(q => q[3].length === node[3])
                }
                const letters = newKey.split('')
                sum += checkSum(letters, 0);
            } else {
                if (!flag) {
                    visited[newKey] = true;
                    const white = getWhiteXY(newPuzzle);
                    filterMove(white).forEach(d => {
                        if (backDirection(node[1]) !== d) {
                            queue.push([white, d, newPuzzle, newKey])
                        }
                    });
                }
            }
        }
    }
    return sum % 100000007
}

// console.log(slider(['WR', 'BB'], ['RB', 'BW']))
// console.log(slider(['WRBB', 'RRBB', 'RRBB', 'RRBB'], ['RRBB', 'RBBB', 'RWRB', 'RRBB']))
console.log(slider(['BBB', 'BWR', 'RRR'], ['RBR', 'BWB', 'RBR']))

// checkSum('DLURRULDDRUL'.split(''), 0);
// checkSum('RULDDRULDLUR'.split(''), 0);
// checkSum('RULDDLURDRUL'.split(''), 0);

// console.log(slider(['AAAA', 'AAAA', 'BWBB', 'BBBB'], ['BBBB', 'BWBB', 'AAAA', 'AAAA']))