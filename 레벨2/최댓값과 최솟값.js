function solution(s) {
  let a;
  a = s.split(" ").sort((a, b) => {
    return a - b;
  });

  return `${a[0]} ${a[a.length - 1]}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
