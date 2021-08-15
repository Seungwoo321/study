
function solution (n) {
    return +[...n.toString()].sort().reverse().join('');
}

console.log(solution(118372)) // 873211