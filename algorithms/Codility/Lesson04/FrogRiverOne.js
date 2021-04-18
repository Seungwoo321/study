
function solution(X, A) {

    if (!A.includes(X)) return -1;
    const data = A.reduce((accumulator, currentValue, index) => {
        if (!accumulator[currentValue]) {
            accumulator[currentValue] = true
            accumulator.count += 1
            accumulator.seconds = index
        }
        return accumulator
    }, {
        count: 0,
        seconds: 0
    })
    return data.count < X ? -1 : data.seconds
}


console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])) // 6
console.log(solution(3, [1, 2, 3]))
console.log(solution(2, [2, 2, 2, 2]))
