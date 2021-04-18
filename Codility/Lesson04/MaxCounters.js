
function solution (N, A) {

    let results = new Array(N).fill(0);
    let tmp = 0;
    let max = 0;
    A.forEach(n => {
        if (n === N + 1) {
            max = tmp;
        } else {
            if (results[n - 1] < max) {
                results[n - 1] = max;
            } 
            results[n - 1]++;
            if (results[n - 1] > tmp) {
                tmp = results[n - 1];
            }
        }
    });
    return results.map(n => Math.max(n, max));
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])) // [3, 2, 2, 4, 2]