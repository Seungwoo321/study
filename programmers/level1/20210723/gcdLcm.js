function solution (n, m) {
    const gcbnlcm = (a, b) => a % b === 0 ? [b, n * m / b] : gcbnlcm(b, a % b);
    return n > m ? gcbnlcm(n, m) : gcbnlcm(m, n);
}

console.log(solution(3, 12)) // [3, 12]
console.log(solution(2,	5)) // [1, 10]

// https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95