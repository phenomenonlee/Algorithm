function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, inx) => acc + cur * B[inx], 0);
}

console.log(solution([4, 1, 2], [4, 4, 5]));
console.log(solution([2, 1], [3, 4]));
