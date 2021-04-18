


function slider ([start, end], n) {

    let key = ''
    let startPuzzle = start
    let history = {}
    let queue = getMethods(start, end, n, key)
    let skip = false
    let sum = 0
    while (queue.length > 0) {
        const node = queue.shift()
        key = node[2]
        // if (history[key.substring(0, key.length - 1)]) {
        //     startPuzzle = history[key.substring(0, key.length - 1)]
        // }
        if (history[key]) {
            startPuzzle = history[key]
        }
        console.log(queue)
        let nextPuzzle = getNextPuzzle(startPuzzle, node[1])
        if (nextPuzzle === end) {
            if (!skip) {
                skip = true
                queue = queue.filter(q => q[2].length === key.length)
                console.log(queue.length)
            }
            sum += checkSum(key.split(''), 0)
            console.log(key)
        } else if (!skip) {
            getMethods(nextPuzzle, end, n, key).forEach(method => {
                console.log(method)
                if (!history[method[2]]) {
                    queue.push(method)
                    history[method[2]] = nextPuzzle
                }
            })
        }
    
    }
    return sum % 100000007
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

function getNextIndex (x, y, n) {
    return (y * n) + (x % n)
}

function getMethods (start, end, n, key) {
    const startIndex = start.indexOf('W')
    const [x, y] = [startIndex % n, (startIndex - startIndex % n) / n]

    const methods = [
        ['R', x - 1 > 0 ? getNextIndex(x - 1, y, n) : -1, key + 'R'],
        ['L', x + 1 < n ? getNextIndex(x + 1, y, n) : -1, key + 'L'],
        ['D', y - 1 > 0 ? getNextIndex(x, y - 1, n) : -1, key + 'D'],
        ['U', y + 1 < n ? getNextIndex(x, y + 1, n) : -1, key + 'U']
    ]
    return methods.filter(items => {
        // console.log(items[1] > -1 && items[0] !== backDirection(key[key.length - 1]))
        return items[1] > -1 && items[0] !== backDirection(key[key.length - 1])

    })
}

function getNextPuzzle (start, nextIndex) {
    const arr = start.split('')
    const startIndex = start.indexOf('W')
    arr[startIndex] = arr[nextIndex]
    arr[nextIndex] = 'W'
    return arr.join('')

}

function backDirection (d) {
    if (d === 'L') return 'R'
    if (d === 'R') return 'L'
    if (d === 'U') return 'D'
    if (d === 'D') return 'U'
}

// console.log(slider(['WRBB', 'RBBW'], 2))
// console.log(slider(['WRBBRRBBRRBBRRBB', 'RRBBRBBBRWRBRRBB'], 4))
// let timestamp3 = Date.now();
console.log(slider(['BBBBWRRRR', 'RBRBWBRBR'], 3)) // RULDDLURDRUL
// console.log(Date.now() - timestamp3 + 'ms');
// console.log(slider(['AAAAAAAABWBBBBBB', 'BBBBBWBBAAAAAAAA'], 4))

// RULDDRURUR