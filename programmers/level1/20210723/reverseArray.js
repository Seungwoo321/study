function solution (n) {
    return [...n.toString()].reverse().map(n => +n);
}

console.log(solution(12345)) // [5, 4, 3, 2, 1]