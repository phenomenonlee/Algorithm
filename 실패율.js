function solution(N, stages) {
    let answer = [];
    let people = stages.length;
    for (let i = 1; i < N + 1; i++) {
        let tmp = stages.filter((n) => n === i).length;
        answer.push([i, tmp / people]);
        people -= tmp;
    }
    answer.sort((a, b) => {
        return b[1] - a[1];
    });
    return answer.map((v) => v[0]);

    /* let answer = [];
    let result = [];
    for (let z = 1; z < N + 1; z++) {
        let count = 0;
        for (let i = 0; i < stages.length; i++) {
            if (z >= stages[i]) {
                count++;
                stages.splice(i, 1);
                --i;
            }
        }
        result.push([count / (stages.length + count), z]);
    }

    result
        .sort((a, b) => {
            return b[0] - a[0];
        })
        .map((v) => {
            answer.push(v[1]);
        });

    return answer; */
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
