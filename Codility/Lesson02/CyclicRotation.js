
function solution (A, K) {
    if (A.length === K) {
        return A
    } else {
        const left = A.splice(K -1, A.length -1)
        return left.concat(A)
    }
}

console.log(solution([3, 8, 9, 7, 6], 3)) // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)) // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)) // [1, 2, 3, 4]
