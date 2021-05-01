function solution (S, P, Q) {
    let i = 0;
    const s = S.split('')
    const results = [];
    while (i < P.length) {
        const dna = s.slice(P[i], Q[i] + 1);

        if (dna.includes('A')) {
            results.push(1);
        } else if (dna.includes('C')) {
            results.push(2);
        } else if (dna.includes('G')) {
            results.push(3);
        } else if (dna.includes('T')) {
            results.push(4)
        }        
        i ++;
    }
    return results;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])) // [2, 4, 1]
console.log(solution('TC', [0, 0, 1], [0, 1, 1])) // [4, 2, 2]

/*

0 - 0 : 2 = 2          
0 - 1 : (0) + 1 = 3    
0 - 2 : (0-1) + 3 = 6  
0 - 3 : (0-2) + 2 = 8  
0 - 4 : (0-3) + 2 = 10 
0 - 5 : (0-4) + 4 = 14 
0 - 6 : (0-5) + 1 = 15 


2 - 4 :   gb



*/