function solution (n) {
    return [...n.toString()].reduce((a, b) => +a + +b, 0);
}


console.log(solution(123)) // 6
console.log(solution(987)) // 24