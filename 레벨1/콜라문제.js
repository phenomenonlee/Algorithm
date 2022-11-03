function solution(a, b, n) {
    let count = 0;

    while (n >= a) {
        if (n % a === 0) {
            let x = (n / a) * b;

            count += x;
            n = x;
        } else {
            let extra = n % a;
            n -= extra;
            let x = (n / a) * b;

            count += x;
            n = extra + x;
        }
        console.log(count);
    }

    return count;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 2, 20));
