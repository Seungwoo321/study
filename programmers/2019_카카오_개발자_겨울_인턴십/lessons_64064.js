// 불량 사용자

function solution(userId, bannedId) {
    let answer = []
    let i = 0
    while (i < bannedId.length) {
        const pattern = bannedId[i].replace(/\*/g, '.')
        const regExp = new RegExp(pattern)
        let filterIds = userId.filter(id => regExp.test(id) && id.length === bannedId[i].length).map(id => [id])
        if (!answer.length) {
            answer = answer.concat(filterIds)
        } else {
            answer = filterIds.reduce((accumulator, currentValue) => {
                const current = answer.map(arr => {
                    const filteredItem = arr.filter(item => !item.includes(currentValue))
                    return currentValue.concat(filteredItem).sort()
                }).filter(item => item.length === i + 1)

                if (accumulator.filter(arr => arr.join('') !== current.join('')).length) {

                    return accumulator.concat(current).sort()
                } else {
                    return accumulator.concat(current).sort()
                }
                // return accumulator.filter(arr => arr.join('') !== current.join('')).concat(current).sort()
            }, [])
        }
        i ++
    }
    return answer
}


// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])) // 2 //
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])) // 2
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])) // 3
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo"]))