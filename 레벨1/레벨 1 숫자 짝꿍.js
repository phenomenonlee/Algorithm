function solution(x, y) {
    var answer = "";

    x = [...x];
    y = [...y];

    for (let i = 0; i < 10; i++) {
        const x_cnt = x.filter((item) => +item === i).length;
        const y_cnt = y.filter((item) => +item === i).length;
        answer += i.toString().repeat(Math.min(x_cnt, y_cnt));
    }

    let set = [...new Set([...answer])];
    return answer.length === 0
        ? "-1"
        : set.length === 1 && set[0] === "0"
        ? "0"
        : [...answer].sort((a, b) => b - a).join("");
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("1255", "1255"));

// https://phenomenonlee.tistory.com/51
