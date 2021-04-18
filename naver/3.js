function solution (S) {

    const list = S.split('');

    while (list.join('').includes('AB') || list.join('').includes('BA') || list.join('').includes('CD') || list.join('').includes('DC')) {
        for (let i = 0; i < list.length - 1; i ++) {
            if ((list[i] === 'A' && list[i + 1] === 'B') || (list[i] === 'B' && list[i + 1] === 'A')) {
                list.splice(i, 2);
            }
        }
        for (let i = 0; i < list.length - 1; i++) {
            if ((list[i] === 'C' && list[i + 1] === 'D') || (list[i] === 'D' && list[i + 1] === 'C')) {
                list.splice(i, 2);
            }
        }
    }

    return list.join('');
}

console.log(solution('CBACD'))
console.log(solution('CABABD'))