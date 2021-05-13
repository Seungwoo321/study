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

    return [...name].reduce((acc, cur, i) => {
        let num = cur.charCodeAt()
        if (cur === "A" && name[i + 1] && name[i + 1] === "A") {
            acc--
        }
        if (i > 0 && i < name.length) acc++
        acc += num > 78 ? 91 - num : num - 65
        return acc
    }, 0)
}

console.log(solution("JEROEN")) // 56
console.log(solution("JAN")) // 23
console.log(solution("JAAAAAAAN")) // 23
