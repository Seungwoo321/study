function solution(n) {
    // 에라토스테네스 체 - 2의 배수가 아닌 수 중에서 3의 배수가 아닌 수를 N 의 제곱근까지 나눈다
    let nums = []
    let i = 2
    do {
        i % 2 !== 0 && i % 3 !== 0 && nums.push(i);
        i ++;
    } while (i <= n);

    let j = 0
    do {
        const num = nums[j]
        const sqrt = Math.sqrt(num)
        let k = 0
       do {
        //    if (num % k === 0) {
        //        nums.shift()
        //        nums = nums.filter(a => a % num !== 0)
        //        j++
        //        break;
        //     }
            k++
       } while (k < sqrt);

    } while (nums.length);

}

console.log(solution(100)) // 4
// console.log(solution(5)) // 3