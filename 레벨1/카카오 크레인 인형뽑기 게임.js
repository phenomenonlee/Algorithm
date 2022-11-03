function solution(board, moves) {
    let answer = [];
    let count = 0;

    for (let i = 0; i < moves.length; i++) {
        for (let z = 0; z < board.length; z++) {
            if (board[z][moves[i] - 1] !== 0) {
                answer.push(board[z][moves[i] - 1]);
                board[z].splice([moves[i] - 1], 1, 0);
                break;
            }
        }
    }

    function removeDupli(answer) {
        for (let i = 0; i < answer.length - 1; i++) {
            if (answer[i] === answer[i + 1]) {
                answer.splice(i, 2);
                count += 2;
                removeDupli(answer);
            }
        }
    }

    removeDupli(answer);

    return count;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);

// https://phenomenonlee.tistory.com/44
