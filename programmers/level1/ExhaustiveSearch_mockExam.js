/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

function solution(answers) {
    const patterns = [
        [1, [1, 2, 3, 4, 5]],
        [2, [2, 1, 2, 3, 2, 4, 2, 5]],
        [3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    ];
    return patterns.reduce((accumulator, currentValue) => {
        answers.filter((v, i) => {
            console.log(i > currentValue[1].length ? i % currentValue[1].length : i)
            // console.log(i > currentValue[1].length ? currentValue[1].length % i : i)
            return currentValue[1][i > currentValue[1].length ? i % currentValue[1].length : i] === v
        })
        // accumulator.push([currentValue[0], answers.filter((v, i) => currentValue[1][i > currentValue[1].length ? currentValue[1].length % i : i] === v).length]);
        return accumulator;
    }, []).sort((a, b) => a[0] - b[0]) // .filter(v => v[1]).map(v => v[0]);
}

// console.log(solution([1, 2, 3, 4, 5])) // [1]
// console.log(solution([1, 3, 2, 4, 2])) // [1, 2, 3]
console.log(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5]))