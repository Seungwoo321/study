
/*
	* 배열 각 원소의 차이가 목표 차이값 k 가 되는 경우의 갯수를 출력
	* 배열 원소의 값은 유니크하다.
	* 인풋 포맷 첫번째 라인  n: 배열 arr의 크기, k: 목표 차이 값
	* 인풋 포맷 두번째 라인 arr: 배열
*/ 

/*
    데이터가 많아서 time limit 되는 케이스가 5개 존재함
    -> 차이가 목표 k 값이 되는 pair은 유일하므로 배열에서 제거해서 for 문 횟수를 줄여볼 수 있을 것 같다. 
*/
// function pairs(k, arr) {
//     return arr.reduce((accumulator, value, i) => {
//         let j = i + 1;
//         while (j < arr.length) {
//             if (Math.abs(value - arr[j]) === k) {
//                 accumulator++;
//             }
//             j ++;
//         }
//         return accumulator;
//     }, 0)
// }


// function pairs (k, arr) {
//     let count = 0;
//     while (arr.length > 0) {
//         const value = arr.shift()
//         if (~arr.indexOf(value + k)) {
//             count ++;
//         }
//         if (~arr.indexOf(value - k)) {
//             count ++;
//         }
//     }
//     return count;
// }

// function pairs (k, arr) {
//     let count = 0;
//     let i = 0;
//     let j = 1;
//     arr.sort()
//     console.log(arr)
//     while (j < arr.length) {
//         const diff = arr[j] - arr[i];
//         if (diff === k) {
//             j++;
//             count ++;
//         } else if (diff > k) {
//             i++;
//         } else if (diff < k) {
//             j++;
//         }
//     }
//     return count
// }



function pairs (k, arr) {
    let count = 0;
    let i = 0;
    let j = 1;
    arr.sort((a, b) => a - b);
    while (j < arr.length) {
        const diff = arr[j] - arr[i];
        if (diff === k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
        } else if (diff < k) {
            j++;
        }
    }
    return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2])) // 3
console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2])) // 5