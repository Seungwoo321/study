// Complete the minimumSwaps function below.
/*
function minimumSwaps(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length - 1) {
        let first = Math.min.apply(null, arr.slice(i))
        let index = arr.indexOf(first);
        if (index !== i) {
            let tmp = arr[i];
            arr[i] = first;
            arr[index] = tmp;
            count++;
        }
        i++;
    }
    // console.log(count)
    return count
}
*/


// function minimumSwaps(arr) {
//     let count = 0;
//     let i = 0;
//     while (i < arr.length - 1) {
//         let position = arr[i] - 1;
//         if (i === position) {
//             // console.log('pass');
//             i++;
//         } else {
//             let tmp = arr[i];
//             // console.log('swap(' + i + ', ' + position + ')');
//             arr[i] = arr[position];
//             arr[position] = tmp;
//             count ++;
//         }
//     }
//     // console.log(arr)
//     return count
// }

function minimumSwaps (arr) {
    let count = 0;
    let i = 0;
    let min = 1;
    let max = arr.length;
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    let flag = false

    while (!flag) {
        console.log(arr)
        for (let j = minIndex; j < maxIndex; j ++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
            if (arr[j] > max) {
                max =  arr[j];
                maxIndex = j;
            }
        }
        console.log(min, max)
        
        if (minIndex !== i) {
            arr[minIndex] = arr[i];
            arr[i] = min;
            count ++; 
        }
        if (maxIndex !== arr[arr.length - 1 - i]) {

            arr[maxIndex] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = max
            count ++;
        }
        if (maxIndex - minIndex === 1) {
            flag = true;
        }
        i++;
        // arr[i]
    }
    console.log(arr)
    return count
}

// console.log(minimumSwaps([2, 3, 4, 1, 5])) // 3
// console.log(minimumSwaps([7, 1, 3, 2, 4 ,5 ,6])) // 5
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))