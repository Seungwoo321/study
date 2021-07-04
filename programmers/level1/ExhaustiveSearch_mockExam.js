/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const record = [
        [], [], []
    ];

    answers.forEach((value, index) => {
        if (patterns[0][index % patterns[0].length] === value) {
            record[0].push(value);
        }
        if (patterns[1][index % patterns[1].length] === value) {
            record[1].push(value);
        }
        if (patterns[2][index % patterns[2].length] === value) {
            record[2].push(value);
        }
    })
    console.log(record)
}

// console.log(solution([1, 2, 3, 4, 5])) // [1]
// console.log(solution([1, 3, 2, 4, 2])) // [1, 2, 3]
console.log(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5]))