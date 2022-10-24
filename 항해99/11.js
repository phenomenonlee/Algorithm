function solution(num) {
  if (num == 1) return 0;
  let count = 0;
  do {
    num % 2 == 0 ? ((num = num / 2), ++count) : ((num = num * 3 + 1), ++count);
    if (count === 500) {
      return -1;
    }
  } while (num !== 1);
  {
    return count;
  }
}

/* 아 진짜 풀다가 gg 칠뻔 했는데 */
