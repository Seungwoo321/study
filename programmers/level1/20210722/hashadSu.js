function solution (x) {
    return x % [...x.toString().split('')].reduce((a, b) => (a * 1) + (b * 1), 0) === 0
}


console.log(solution(10, true))
console.log(solution(12, true))
console.log(solution(11, false))
console.log(solution(13, false))