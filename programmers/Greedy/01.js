/**
 * 
 * n	lost	reserve	return
 * 5	[2, 4]	[1, 3, 5]	5
 * 5	[2, 4]	[3]	        4
 * 3	[3]	    [1]	        2
 * 
 */
function solution1(n, lost, reserve) {
    let answer = n - lost.length;
    let i = 0;

    while (lost.length && reserve.length) {
        const first = lost.shift();
        const my = reserve.indexOf(first);
        const beforeMember = reserve.indexOf(first - 1);
        const afterMember = reserve.indexOf(first + 1);
        if (my > -1) {
            reserve.splice(my, 1);
            answer++;
        } else if (beforeMember > -1) {
            reserve.splice(beforeMember, 1);
            answer++;
        } else if (afterMember > -1) {
            reserve.splice(afterMember, 1);
            answer++;
        }
        i++;
    }
    return answer;
}
function solution2(n, lost, reserve) {

    let i = 0;
    const borrow = [];
    while(reserve.length) {
        const first = reserve.shift();
        if (!borrow.includes(first) && lost.indexOf(first) > -1) {
            borrow.push(first);

        } else if (!borrow.includes(first - 1) && lost.indexOf(first - 1) > -1) {
            borrow.push(first - 1);

        } else if (!borrow.includes(first + 1) && lost.indexOf(first + 1) > -1) {
            borrow.push(first + 1);
        }
        i ++;
    }
    return n - lost.length + borrow.length;
}

function solution(n, lost, reserve) {
    const borrow = reserve.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue) && lost.includes(currentValue)) {
            accumulator.push(currentValue)
        } else if (currentValue === 1 && lost.includes(2)) {
            accumulator.push(1)
        } else if (currentValue === n && lost.includes(n + 1)) {
            accumulator.push(n + 1)
        } else if (!accumulator.includes(currentValue - 1) && lost.includes(currentValue - 1) && !lost.includes(currentValue + 1)) {
            accumulator.push(currentValue - 1)
        } else if (!accumulator.includes(currentValue + 1) && lost.includes(currentValue + 1) && !lost.includes(currentValue - 1)) {
            accumulator.push(currentValue + 1)
        } else {
            if (!accumulator.includes(currentValue - 1) && lost.includes(currentValue - 1)) {
                accumulator.push(currentValue - 1)
            } else if (!accumulator.includes(currentValue + 1) && lost.includes(currentValue + 1)) {
                accumulator.push(currentValue + 1)
            }
        }
        return accumulator
    }, [])
    return n - lost.length + borrow.length
}



console.log(solution(5, [2, 5], [1, 3, 5])) // 5
console.log(solution(5, [2, 4], [3])) // 4
console.log(solution(3, [3], [1])) // 2
console.log(solution(12, [1, 2, 3, 5, 8, 9, 11], [4, 2, 10])) // 8
console.log(solution(3, [2, 3], [1, 2, 3]))
