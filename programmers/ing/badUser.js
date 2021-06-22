// 불량 사용자

// function solution(userId, bannedId) {
//     let answer = []
//     let i = 0
//     while (i < bannedId.length) {
//         const pattern = bannedId[i].replace(/\*/g, '.')
//         const regExp = new RegExp(pattern)
//         let filterIds = userId.filter(id => regExp.test(id) && id.length === bannedId[i].length).map(id => [id])
//         if (!answer.length) {
//             answer = answer.concat(filterIds)
//         } else {
//             answer = filterIds.reduce((accumulator, currentValue) => {
//                 const current = answer.map(arr => {
//                     const filteredItem = arr.filter(item => !item.includes(currentValue))
//                     return currentValue.concat(filteredItem).sort()
//                 }).filter(item => item.length === i + 1)

//                 if (accumulator.filter(arr => arr.join('') !== current.join('')).length) {

//                     return accumulator.concat(current).sort()
//                 } else {
//                     return accumulator.concat(current).sort()
//                 }
//                 // return accumulator.filter(arr => arr.join('') !== current.join('')).concat(current).sort()
//             }, [])
//         }
//         i ++
//     }
//     return answer
// }

function solution(userId, bannedId) {

    // const doConcat = (arr, i, data) => {
    //     data = arr[i].reduce((acc, cur) => acc.concat(data.map(subArr => cur.concat(subArr))), [])
    //     if (i < arr.length - 1) {
    //         return doConcat(arr, i + 1, data)
    //     } else {
    //         return data
    //     }
    // }
    const doConcat = (arr, i, data) => {
        data = arr[i].reduce((acc, cur) => {
            acc[cur] = {}
        }, data)
        if (i < 1) {
            return doConcat(arr, i + 1, data)
        } else {
            return data
        }
        // if (i < arr.length - 1) {
        // if (i < 2) {
        //     return doConcat(arr, i + 1, data)
        // } else {
        //     return data
        // }
    }
    const arr = bannedId.map(bannedUser => userId.filter(user => (new RegExp(bannedUser.replace(/\*/g, '.'))).test(user) && user.length === bannedUser.length).map(id => id))
    // console.log(arr)
    let answer = arr[0]
    const data = {}
    return doConcat(arr, 0, data)
}



// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])) // 2 //
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******"])) // 3
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])) // 3
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo"])) // 3