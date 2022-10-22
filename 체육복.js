function solution(n, lost, reserve) {
    const origin = n;

    let equal = lost.filter((v) => reserve.includes(v));

    for (let z = 0; z < lost.length; z++) {
        for (let i = 0; i < equal.length; i++) {
            if (lost[z] === equal[i]) {
                lost.splice(z, 1);
                --z;
                continue;
            }
        }
    }

    for (let z = 0; z < reserve.length; z++) {
        for (let i = 0; i < equal.length; i++) {
            if (reserve[z] === equal[i]) {
                reserve.splice(z, 1);
                --z;
                continue;
            }
        }
    }

    n -= lost.length;
    for (let i = 0; i < reserve.length; i++) {
        let minus = reserve[i] - 1;
        let plus = reserve[i] + 1;

        let matchM = lost.find((element) => element === minus);
        let matchP = lost.find((element) => element === plus);

        if (matchM || matchP) {
            n++;
        }
    }
    if (origin < n) {
        return origin;
    }

    return n;
}

console.log(solution(4, [2, 3], [3, 4]));
