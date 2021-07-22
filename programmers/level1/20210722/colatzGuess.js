function solution (num) {
    const colatzGuess = (index, num) => {
        let result = num % 2 === 0 ? num / 2 : (num * 3) + 1;
        return result === 1 ? index : (index === 499 ? -1 : colatzGuess(index + 1, result));
    }
    return num === 1 ? 0 : colatzGuess(1, num);
}

// console.log(solution(6)) //	8
// console.log(solution(16)) // 4
// console.log(solution(626331)) // - 1
console.log(solution(1)) // - 1