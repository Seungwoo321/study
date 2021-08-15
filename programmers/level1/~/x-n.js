
function solution (x, n) {
    return new Array(n).fill(x, 0, n).map((v, i) => v * i + x);
}

console.log(solution(2,	5)) // [2, 4, 6, 8, 10]
console.log(solution(4, 3)) // [4, 8, 12]
console.log(solution(-4, 2)) //[-4, -8]