// function solution(S, P, Q) {
//     let i = 0;
//     const results = [];
//     const s = s.split('');
//     while (i < P.length) {
//         const dna = s.slice(P[i], Q[i] + 1);

//         if (dna.includes('A')) {
//             results.push(1);
//         } else if (dna.includes('C')) {
//             results.push(2);
//         } else if (dna.includes('G')) {
//             results.push(3);
//         } else if (dna.includes('T')) {
//             results.push(4)
//         }
//         i++;
//     }
//     return results;
// }


// function solution (S, P, Q) {
//     let i = 0;
//     const results = [];
//     while (i < P.length) {
//         const dna = S.slice(P[i], Q[i] + 1);

//         if (dna.includes('A')) {
//             results.push(1);
//         } else if (dna.includes('C')) {
//             results.push(2);
//         } else if (dna.includes('G')) {
//             results.push(3);
//         } else if (dna.includes('T')) {
//             results.push(4)
//         }        
//         i ++;
//     }
//     return results;
// }

function solution (S, P, Q) {
    let i = 0;
    const results = [];
    
    // while (i < P.length) {
    //     const dna = S.slice(P[i], Q[i] + 1);

    //     if (dna.includes('A')) {
    //         results.push(1);
    //     } else if (dna.includes('C')) {
    //         results.push(2);
    //     } else if (dna.includes('G')) {
    //         results.push(3);
    //     } else if (dna.includes('T')) {
    //         results.push(4)
    //     }        
    //     i ++;
    // }
    return results;
}


console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])) // [2, 4, 1]
console.log(solution('TC', [0, 0, 1], [0, 1, 1])) // [4, 2, 2]

/*

A: 1
C: 2
G: 3
T: 4

CAGCCTA

2132241

0번째 값: 2 
1번째까지 합: 3
2번째까지 합: 6
3번째까지 합: 8
4번째까지 합: 10
5번째까지 합: 14
6번째까지 합: 15 

2, 3, 6, 8, 10, 14, 15 

인덱스2 에서 4까지 중 작은 숫자는 
10 - 8 = 2 와 8 - 6 = 2 이므로 2 

인덱스 5에서 5까지 중 작은 숫자는 
14 - 10 = 4 

인덱스 0 에서 6까지 중 작은 숫자는
15 - 14 = 1 



*/