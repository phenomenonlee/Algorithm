function solution(d, budget) {
  let count = "";
  d.sort((a, b) => a - b);
  for (i = 0; budget >= 0; i++) {
    budget -= d[i];
    count++;
  }
  return count - 1;
}
