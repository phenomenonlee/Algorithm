let count = 2
function solution(n, a, b) {
    if (Math.abs(a - b) === 1) if (a % 2 === 0 ? a > b : b > a) return 1
    a % 2 === 0 ? a = a / 2 : a = (Math.floor(a / 2) + 1), b % 2 === 0 ? b = b / 2 : b = (Math.floor(b / 2) + 1)
    Math.abs(a - b) === 1 ? !(a % 2 === 0 ? a > b : b > a) && (count++, solution(n, a, b)) : (count++, solution(n, a, b))
    return count
}

console.log(solution(8, 4, 7))
console.log(solution(2, 1, 2))

/* let count = 1
function solution(n, a, b) {
    if (Math.abs(a - b) === 1) {
        if (a % 2 === 0 ? a > b : b > a) return 1
    }
    a % 2 === 0 ? a = a / 2 : a = (Math.floor(a / 2) + 1)
    b % 2 === 0 ? b = b / 2 : b = (Math.floor(b / 2) + 1)
    if (Math.abs(a - b) === 1) {
        if (a % 2 === 0 ? a > b : b > a) {
        } else {
            count++
            solution(n, a, b)
        }
    }
    else {
        count++
        solution(n, a, b)
    }
    return count
}
console.log(solution(8, 4, 7))
console.log(solution(2, 1, 2)) */