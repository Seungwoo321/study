// 불량 사용자

function solution(userId, bannedId) {
    let answer = 0

    while (bannedId.length) {
        const firstBanned = [...bannedId.shift()]

        const pattern = firstBanned.map(s => {
            if (s === '*') {
                return '[A-Za-z0-9]'
            } else {
                return s
            }
        }).join('')
        
        const re = new RegExp(pattern)
        let count = 0
        userId.forEach(id => {
            if (re.test(id) && firstBanned.length === id.length) {
                count ++;
            }
        })
        answer = Math.max.apply(null, [answer, count])

    }
    return answer

}


console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])) // 2 //
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])) // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])) // 3