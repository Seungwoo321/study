function solution (arr1, arr2) {
    return arr1.map((values, i) => values.map((value, j) => value + arr2[i][j]));
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])) // [[4, 6], [7, 9]]
console.log(solution([[1], [2]], [[3], [4]])) // [[4], [6]]