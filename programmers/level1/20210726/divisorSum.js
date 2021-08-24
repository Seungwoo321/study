function solution (n) {
    const sqrt = Math.sqrt(n);
    let sum = sqrt % 1 === 0 ? sqrt : 0;
    let i = 1;
    do {
        n % i === 0 && (sum += i + (n / i));
        i ++;
    } while (i < n / i);
    return sum;
}

console.log(solution(12)) // 28
console.log(solution(5)) // 6
console.log(solution(36)) // 91
console.log(solution(144)) // 403
console.log(solution(9)) // 13
console.log(solution(15)) // 24 