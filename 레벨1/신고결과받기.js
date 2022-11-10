function solution(id_list, report, k) {
    const reported = {};
    const answer = {};
    id_list.forEach((em) => {
        reported[em] = [0];
        answer[em] = 0;
    });
    report.forEach((em) => {
        if (!reported[em.split(" ")[1]].includes(em.split(" ")[0])) {
            reported[em.split(" ")[1]].push(em.split(" ")[0]);
            reported[em.split(" ")[1]][0] += 1;
        }
    });
    for (const key in reported) {
        if (reported[key][0] >= k) {
            for (i = 1; i < reported[key].length; i++) {
                answer[reported[key][i]] += 1;
            }
        }
    }
    return Object.values(answer);
}

/* function solution(id_list, report, k) {
    let reports = [...new Set(report)].map((a) => {
        return a.split(" ");
    });
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }
    let answer = id_list.map((a) => good.get(a) || 0);
    return answer;
} */

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
);

console.log(
    solution(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        3
    )
);

// https://phenomenonlee.tistory.com/53
