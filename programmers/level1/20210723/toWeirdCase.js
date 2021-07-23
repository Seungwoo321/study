function solution (s) {
    let index = 0;
    return [...s].map(v => (v === ' ' ? index = 0 : index++, index % 2 === 1 ? v.toUpperCase() : v.toLowerCase())).join('');
}
console.log(solution("try hello world")) //	"TrY HeLlO WoRlD"