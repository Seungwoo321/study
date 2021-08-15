function solution (arr) {
    let min = Math.min.apply(null, arr);
    return arr.length === 1 ? [-1] : arr.filter(n => n !== min);
}

console.log(solution([4, 3, 2, 1])) // [4, 3, 2]
console.log(solution([10])) // [-1]