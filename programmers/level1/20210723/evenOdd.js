function solution (num) {
    return !(num % 2) ? 'Even' : 'Odd';
}
console.log(solution(3)) //	"Odd"
console.log(solution(4)) // "Even"
console.log(solution(0)) // "Even"
console.log(solution(-1)) // "Odd"
console.log(solution(-2)) // "Even"