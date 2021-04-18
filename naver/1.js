function solution(A) {
    const pattern = /(.)\1{1,}/;
    const concatenation = A.slice();

    const recursion = (start, arr) => {
        if (start < A.length) {
            arr.forEach(value => {
                if (A[start] !== value) {
                    arr.push(A[start] + value);
                }
            })
            recursion(start + 1, arr);
        }
    }
    recursion(0, concatenation);
    const results = concatenation.slice(A.length, concatenation.length).filter(s => !pattern.test(s.split('').sort().join(''))).map(value => value.length);
    return !results.length ? 0 : Math.max.apply(null, results);
}


console.log(solution(['co', 'dil', 'ity', 'yyy'])) // 5
console.log(solution(['potato', 'kayak', 'banana', 'racecar'])) // 0
console.log(solution(['eva', 'jqw', 'tyn', 'jan'])) // 9
console.log(solution(['eva', 'jqw', 'tyn', 'jan', 'bcd'])) // 12
console.log(solution(['eva', 'jqw', 'tyn', 'ifm', 'bcd', 'xyz'])) // 15
console.log(solution(['eva', 'jqw', 'tyn', 'ifm', 'bcd', 'xz'])) // 18
console.log(solution(['mz', 'megazone']))