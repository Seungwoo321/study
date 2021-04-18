
function solution (A) {

    const checked = {};
    A.sort((a, b) => a - b);
    let result = 1;

    for (let i = 0; i < A.length; i ++) {
        let item = A[i];
        if (item < 1) {
            item = A[i + 1];
            continue;
        }
        if (result === item) {
            if (!checked[item]) {
                checked[item] = true;
                result++;
            }
        } else {
            
            if (result - 1 === item) {
                continue;
            } else {
                break;
            }
        }
    }
    return result;
}

console.log(solution([1, 3, 6, 4, 1, 2])) // 5
console.log(solution([-2, 0, -4, -3, 1])) // 2
console.log(solution([-2, 3, 4, 5, 6])) // 1
console.log(solution([-1, -3])) // 1
console.log(solution([1, 2, 3])) // 4