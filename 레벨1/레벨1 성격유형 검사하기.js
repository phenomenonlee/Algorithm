function solution(survey, choices) {
    let RT = { R: 0, T: 0 };
    let CF = { C: 0, F: 0 };
    let JM = { J: 0, M: 0 };
    let AN = { A: 0, N: 0 };
    let answer = "";

    const transScore = (score) => {
        let trans = {
            1: 3,
            2: 2,
            3: 1,
            4: 0,
            5: 1,
            6: 2,
            7: 3,
        };
        return trans[score];
    };

    for (let i = 0; i < survey.length; i++) {
        let char = [...survey[i]];

        if (survey[i].includes("R")) {
            if (choices[i] < 4) {
                RT[char[0]] += transScore(choices[i]);
            } else {
                RT[char[1]] += transScore(choices[i]);
            }
        } else if (survey[i].includes("C")) {
            if (choices[i] < 4) {
                CF[char[0]] += transScore(choices[i]);
            } else {
                CF[char[1]] += transScore(choices[i]);
            }
        } else if (survey[i].includes("J")) {
            if (choices[i] < 4) {
                JM[char[0]] += transScore(choices[i]);
            } else {
                JM[char[1]] += transScore(choices[i]);
            }
        } else {
            if (choices[i] < 4) {
                AN[char[0]] += transScore(choices[i]);
            } else {
                AN[char[1]] += transScore(choices[i]);
            }
        }
    }
    if (RT["R"] > RT["T"]) {
        answer += "R";
    } else if (RT["R"] === RT["T"]) {
        answer += "R";
    } else {
        answer += "T";
    }

    if (CF["C"] > CF["F"]) {
        answer += "C";
    } else if (CF["C"] === CF["F"]) {
        answer += "C";
    } else {
        answer += "F";
    }

    if (JM["J"] > JM["M"]) {
        answer += "J";
    } else if (JM["J"] === JM["M"]) {
        answer += "J";
    } else {
        answer += "M";
    }

    if (AN["A"] > AN["N"]) {
        answer += "A";
    } else if (AN["A"] === AN["N"]) {
        answer += "A";
    } else {
        answer += "N";
    }

    return answer;
}

/* function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT", "CF", "JM", "AN"];

    types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
} */

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));

// https://phenomenonlee.tistory.com/52
