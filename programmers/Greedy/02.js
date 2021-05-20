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

    const arr = [...name]
    let move = 0
    let current = 0
    let i = 0
    let back = false
    while (arr.length) {
        const num = arr.shift().charCodeAt()

        if (num !== 65) {
            move += Math.min(Math.abs(num - 91), Math.abs(num - 65))
        
            if (i - current > current + 1 + name.length - i) {
                // move += current + 1
                // arr.reverse()
                // i = - current
                // console.log(i)
                // current = name.length - i
            } else {
                console.log(Math.min(Math.abs(i - current)))
                move += Math.min(Math.abs(i - current))
            }
            current = i
        }
        i++
    }
    return move
}

// console.log(solution("JEROEN")) // 56
// console.log(solution("JAN")) // 23  
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

// console.log(solution("BBBAAB")) // 7 // 9
// console.log(solution("BBAABAAAAB")) // 9 // 13
// 
// console.log(solution("ABAAAAABAB")) // 8
// 2 3 3 
// console.log(solution("BABAAAAB")) // 7
// console.log(solution("JAJAAAJ")) // 31


console.log(solution("AABAAAAAAABBB")) // 10
console.log(solution("CANAAAAANAN")) // 48