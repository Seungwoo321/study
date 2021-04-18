function solution (A) {

    A.sort((a, b) => a - b);
    let num = 1;
    let result = 1;

    for (let i = 0; i < A.length; i ++) {
        if (A[i] === num) {
            num++;
        } else {
            result = 0;
            break;
        }
    }
    return result;
}

console.log(solution([4, 1, 3, 2])) // 1
console.log(solution([4, 1, 3])) // 0
console.log(solution([2]))