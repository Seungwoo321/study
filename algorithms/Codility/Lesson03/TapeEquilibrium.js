// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if (A.length === 2) {
//         return Math.abs(A[0] - A[1]);
//     }

//     const sum = A.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     let leftSum = A[0];
//     let rightSum = sum - A[0];
//     let difference = Math.abs(leftSum - rightSum);

//     for (let i = 1; i < A.length - 1; i ++) {
//         leftSum += A[i];
//         rightSum = sum - leftSum;
//         difference = Math.min(Math.abs(leftSum - rightSum), difference);
//     }
//     return difference;
// }



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 2) {
        return Math.abs(A[0] - A[1]);
    }

    const sum = A.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let leftSum = 0;
    const results = [];
    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        const rightSum = sum - leftSum;
        results.push(Math.abs(leftSum - rightSum));
    }
    return Math.min.apply(null, results);
}


console.log(solution([-10, -20, -30, -40, 100]))