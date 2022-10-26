function solution(numbers, hand) {
    let answer = [];

    const left = [1, 4, 7];
    const rigit = [3, 6, 9];
    const middle = [2, 5, 8, 11];

    let left_hand = 10;
    let rigit_hand = 12;

    const distance = (goal, me) => {
        let count = 0;
        while (goal !== me) {
            if (goal < me) {
                if (me - goal < 3) {
                    me -= 1;
                    count++;
                    continue;
                }
                me -= 3;
                count++;
                continue;
            }
            if (goal > me) {
                if (goal - me < 3) {
                    me += 1;
                    count++;
                    continue;
                }
                me += 3;
                count++;
            }
        }
        return count;
    };

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            numbers.splice(i, 1, 11);
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (left.includes(numbers[i])) {
            answer.push("L");
            left_hand = numbers[i];
        }
        if (rigit.includes(numbers[i])) {
            answer.push("R");
            rigit_hand = numbers[i];
        }
        if (middle.includes(numbers[i])) {
            const left_distance = distance(numbers[i], left_hand);
            const right_distance = distance(numbers[i], rigit_hand);

            if (left_distance < right_distance) {
                answer.push("L");
                left_hand = numbers[i];
            }

            if (left_distance > right_distance) {
                answer.push("R");
                rigit_hand = numbers[i];
            }

            if (left_distance === right_distance) {
                if (hand === "left") {
                    answer.push("L");
                    left_hand = numbers[i];
                } else {
                    answer.push("R");
                    rigit_hand = numbers[i];
                }
            }
        }
    }
    return answer.join("");
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

// 상하는 3 차이가 남
//  좌우는 1 차이가 남

//https://phenomenonlee.tistory.com/43
