
function solution (A, B, K) {
    if (A % K === 0) {
        return Math.floor(B/K) - Math.floor(A/K) + 1;
    } else {
        return Math.floor(B/K) - Math.floor(A/K)
    } 
}


console.log(solution(6, 11, 2)); // 3
console.log(solution(2, 2, 1)); // 1 
console.log(solution(2, 3, 4)); // 0
console.log(solution(0, 2000000000, 1)); // 2000000001
console.log(solution(10, 10, 5)) // 1
console.log(solution(0, 0, 11)) // 1
console.log(solution(11, 14, 2)) // 2