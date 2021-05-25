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

    const doConcat = (arr, i, data) => {
        const newData = data.reduce((accumulator, currentValue) => accumulator.concat(arr[i].map(v => currentValue.includes(v[0]) ? [] : v.concat(currentValue)).filter(v => v.length)), [])
        if (i < arr.length - 1) {
            return doConcat(arr, i + 1, newData)
        } else {
            return newData
        }
    }

    const arr = bannedId.map(bannedUser => userId.filter(user => (new RegExp(bannedUser.replace(/\*/g, '.'))).test(user) && user.length === bannedUser.length).map(id => id))
    console.log(arr)
    let answer = arr[0]

    // return doConcat(arr, 1, answer).length
}



// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])) // 2 //
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******"])) // 3
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])) // 3
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo"])) // 3