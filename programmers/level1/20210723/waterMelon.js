// function solution (n) {
//     let answer = '';
//     while (answer.length < n) answer.length % 2 ? answer += '박' : answer += '수';

//     // for (answer = ''; answer.length < n; answer.length % 2 ? answer += '박' : answer += '수') {}

//     // do {answer.length % 2 ? answer += '박' : answer += '수'} while (answer.length < n);
    
//     return answer;
// }

function solution(n) {
    return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}
console.log(solution(3)) // 수박수
console.log(solution(4)) // 수박수박