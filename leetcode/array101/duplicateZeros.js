/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    
    arr.reduce((acc, cur) => cur === 0 ? acc.concat([0, 0]) : acc.concat(cur), []).slice(0, arr.length).forEach((n, i) => arr[i] = n);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]));
