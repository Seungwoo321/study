/*
 * name	return
 * "JEROEN"	56
 * "JAN"	23
 * 
 * 
 * A B C D E F G H I J K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
 * 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
 *                              13 12 11 10  9  8  7  6  5  4  3  2  1
*/
/*
function solution(name) {

    let arr = [...name]
    let move = 0
    let position = 0
    let back = false

    if (arr[0] !== "A") {
        move += Math.min(Math.abs(arr[0].charCodeAt() - 91), Math.abs(arr[0].charCodeAt() - 65))
    }

    const indexes = arr.map((v, i) => v !== "A" ? i : v).filter(v => v && typeof v === 'number')
    while (indexes.length) {

        if (!back) {
            const left = position + arr.length - indexes[indexes.length - 1]
            const right = indexes[0] - position

            if (left < right) {
                back = true
                move += left
                position = indexes[indexes.length - 1]
                indexes.pop()
            } else {
                move += right
                position = indexes[0]
                indexes.shift()
            }

        } else {
            const left = position - indexes[indexes.length - 1]
            move += left
            position = indexes[indexes.length - 1]
            indexes.pop()

        }
    
        if (arr[position] !== "A") {
            move += Math.min(Math.abs(arr[position].charCodeAt() - 91), Math.abs(arr[position].charCodeAt() - 65))
        }
    
    }
    return move
}
*/

function solution(name) {
    const arr = [...name]
    const indexes = arr.map((v, i) => v !== "A" ? i : v).filter(v => v && typeof v === 'number')
    let move = 0
    let position = 0
    let back = false
    const moveTopAndBottom = (c) => c !== "A" ? Math.min(Math.abs(c.charCodeAt() - 91), Math.abs(c.charCodeAt() - 65)) : 0
    move += moveTopAndBottom(arr[position])
    while (indexes.length) {
        const left = back ? position - indexes[indexes.length - 1] : position - indexes[indexes.length - 1] + arr.length
        const right = indexes[0] - position
        if (back || (!back && left < right)) {
            back = true
            move += left
            position = indexes[indexes.length - 1]
            indexes.pop()
        } else {
            move += right
            position = indexes[0]
            indexes.shift()
        }
        move += moveTopAndBottom(arr[position])
    }
    return move
}


function solution(name) {
    const arr = [...name];

    return arr.reduce((acc, cur, index) => {
        let c = cur.charCodeAt()
        let next = arr.slice(index + 1).findIndex(alpha => alpha != 'A');

        next = next == -1 ? index + 1 : next + index + 1;
        acc[0] += Math.min(Math.abs(c - 91), Math.abs(c - 65))
        acc[1] = Math.min(acc[1], index * 2 + name.length - next);

        return acc
    }, [0, name.length - 1]).reduce((acc, cur) => acc + cur, 0)
}
console.log(solution("JEROEN")) // 56
console.log(solution("JAN")) // 23  
console.log(solution("JAAAAAAAN")) // 23
console.log(solution("ABAAAAAAABA")) // 6
console.log(solution("AAB")) // 2
console.log(solution("ZZZ")) // 5
console.log(solution("ABABAAAAAB")) // 10
console.log(solution("ABABAAAAABA")) // 11
console.log(solution("BBBBAAAAAB")) // 12
console.log(solution("BBBBAAAABA")) // 13
console.log(solution("BBBAAB")) // 9
console.log(solution("BBBAAAB")) // 9
console.log(solution("BBAABAAAAB")) // 12
console.log(solution("ABAAAAABAB")) // 8
console.log(solution("JAJAAAJ")) // 32

console.log(solution("AAAA")) // 0 // 3
console.log(solution("AABAAAAAAABBB")) // 15 // 11
console.log(solution("CANAAAAANAN")) // 50 // 48
console.log(solution("BABAAAAB")) // 9 // 8
