function solution(ingredient) {
    let count = 0;
    let bread = 0;
    for (i = 0; i < ingredient.length - 3; i++) {
        if (
            `${ingredient[i]}${ingredient[i + 1]}${ingredient[i + 2]}${
                ingredient[i + 3]
            }` === "1231"
        ) {
            ingredient.splice(i, 4);
            count++;
            i = bread;
        }
        if (ingredient[i] === 1) {
            bread = i - 2;
        }
    }
    return count;
}

/* function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        if (
            stk[stk.length-1] === 1 &&
            stk[stk.length-2] === 3 &&
            stk[stk.length-3] === 2 &&
            stk[stk.length-4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
} */

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
