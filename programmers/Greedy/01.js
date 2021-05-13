/**
 * 
 * n	lost	reserve	return
 * 5	[2, 4]	[1, 3, 5]	5
 * 5	[2, 4]	[3]	        4
 * 3	[3]	    [1]	        2
 * 
 */
// function solution(n, lost, reserve) {

//     const arr = lost.slice();
//     while (arr.length) {
//         const value = arr.shift();
//         if (reserve.includes(value)) {
//             lost.splice(lost.indexOf(value), 1);
//             reserve.splice(reserve.indexOf(value), 1);
//         }
//     }
 
//     while (reserve.length) {
        
//         const first = reserve.shift();
//         const beforeMember = lost.indexOf(first - 1);
//         const afterMember = lost.indexOf(first + 1);

//         if (beforeMember > -1) {
//             lost.splice(beforeMember, 1);
//         } else if (afterMember > -1) {
//             lost.splice(afterMember, 1);
//         }
//     }

//     return n - lost.length;
// }


// function solution (n, lost, reserve) {

//     const myReserve = lost.filter(l => reserve.includes(l));
//     const realReserve = reserve.filter(r => !myReserve.includes(r));

//     const borrow = realReserve.reduce((accumulator, currentValue) => {
//         const before = currentValue - 1;
//         const after = currentValue + 1;

//         if (!accumulator.includes(before) && !myReserve.includes(before) && lost.includes(before)) {
//             accumulator.push(before);

//         } else if (!accumulator.includes(after) && !myReserve.includes(after) && lost.includes(after)) {
//             accumulator.push(after);

//         }
//         return accumulator;
//     }, [])

//     return n - lost.length + myReserve.length + borrow.length
// }



function solution(n, lost, reserve) {
    const reducer = (acc ,cur) => {
        if (!acc[cur]) {
            acc[cur] = 0
        } else if (acc[cur-1] === 1) {
            acc[cur]++;

        } 
    }
    const lostMember = lost.reduce((acc, cur) => (acc[cur] = -1), {});
    const reserveMember = reserve.filter(r => !myReserve.includes(r));

    const borrow = realReserve.reduce((accumulator, currentValue) => {
        const before = currentValue - 1;
        const after = currentValue + 1;

        if (!accumulator.includes(before) && !myReserve.includes(before) && lost.includes(before)) {
            accumulator.push(before);

        } else if (!accumulator.includes(after) && !myReserve.includes(after) && lost.includes(after)) {
            accumulator.push(after);

        }
        return accumulator;
    }, [])

    return n - lost.length + myReserve.length + borrow.length
}



console.log(solution(5, [2, 5], [1, 3, 5])) // 5
console.log(solution(5, [2, 4], [3])) // 4
console.log(solution(3, [3], [1])) // 2
console.log(solution(12, [1, 2, 3, 5, 8, 9, 11], [4, 2, 10])) // 8
console.log(solution(5, [1,5], [3]))
console.log(solution(4, [3, 1, 2], [2, 4, 3])) // 3
console.log(solution(2, [2, 1], [1, 2])) // 2