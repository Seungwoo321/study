// function solution (s) {
//     return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
// }

function solution(s) {
    return [...s].sort().reverse().join('');
}

console.log(solution("Zbcdefg")) // "gfedcbZ"