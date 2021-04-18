function isBalanced(s) {
    let sArray = s.split('');
    // console.log(!~s.indexOf('[]'))
    while (~s.indexOf('[]') || ~s.indexOf('()') || ~s.indexOf('{}')) {
        if (~s.indexOf('[]')) {
            sArray.splice(s.indexOf('[]'), 2);
            s = sArray.join('');
        }
        if (~s.indexOf('()')) {
            sArray.splice(s.indexOf('()'), 2);
            s = sArray.join('');
        }
        if (~s.indexOf('{}')) {
            sArray.splice(s.indexOf('{}'), 2);
            s = sArray.join('');
        }

    }
    // console.log(sArray)
    return sArray.length > 0 ? 'NO' : 'YES';
}

console.log(isBalanced('{[()]}')) // YES
console.log(isBalanced('{[(])}')) // NO
console.log(isBalanced('{{[[(())]]}}')) // YES
console.log(isBalanced('{(([])[])[]}')) // YES
console.log(isBalanced('{(([])[])[]]}')) // NO
console.log(isBalanced('{(([])[])[]}[]')) // YES