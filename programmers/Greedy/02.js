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

function solution(name) {

    let arr = [...name]
    let index = 0
    let move = 0
    let position = 0
    let orders = []
    let c = arr[index]
    while (orders.length < arr.filter(s => s !== "A").length) {
        let c = arr[position]
        let num = c.charCodeAt()
        let right = 1
        let left = 1

        move += Math.min(Math.abs(num - 91), Math.abs(num - 65))

        if (c !== "A") {
            orders.push(c)
            move += Math.min(right, left)
            position++
        } else {
            right = arr.findIndex((s, i) => s !== "A" && index < i) - index
            left = arr.slice().reverse().findIndex((s, i) => s !== "A" && index - 1 < i) + 1 + index

            if (left < right) {
                const leftArray = arr.slice(0, position + 1)
                const rightArray = arr.slice(position + 1, arr.length)
                arr = rightArray.concat(leftArray)
                arr.reverse()
            }
            position = Math.min(right, left)
        }
        index ++
    }
    console.log(orders)
    return move
}

// console.log(solution("JEROEN")) // 56
console.log(solution("JAN")) // 23  
// console.log(solution("JAAAAAAAN")) // 23
// console.log(solution("AAAA")) // 0
// console.log(solution("ABAAAAAAABA")) // 6
// console.log(solution("AAB")) // 2
// console.log(solution("ZZZ")) // 5
// console.log(solution("BBBAAAB")) // 9
// console.log(solution("ABABAAAAAB")) // 10
// console.log(solution("ABABAAAAABA")) // 11
// console.log(solution("BBBBAAAAAB")) // 12
// console.log(solution("BBBBAAAABA")) // 13
// console.log(solution("BBBAAB")) // 9

// console.log(solution("BBAABAAAAB")) // 13

// console.log(solution("ABAAAAABAB")) // 8
// console.log(solution("BABAAAAB")) // 8
// console.log(solution("JAJAAAJ")) // 32
// console.log(solution("AABAAAAAAABBB")) // 11
// console.log(solution("CANAAAAANAN")) // 48