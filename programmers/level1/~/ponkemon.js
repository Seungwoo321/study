// function solution(nums) {
//     return Math.min(nums.reduce((accumulator, currentValue) => {
//         if (!accumulator.includes(currentValue)) {
//             accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []).length, nums.length / 2);
// }

function solution(nums) {
    return Math.min([...new Set(nums)].length, nums.length / 2);
}


console.log(solution([3, 1, 2, 3])) // 2
console.log(solution([3, 3, 3, 2, 2, 4])) //	3
console.log(solution([3, 3, 3, 2, 2, 2])) //	2

