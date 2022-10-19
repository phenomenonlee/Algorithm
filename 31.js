function solution(n) {
  let array = [];
  for (i = 2; i <= n; i++) {
    for (z = 2; z < i; z++) {
      if (i % z !== 0) {
        break;
      }
    }
  }
  return;
}

solution(10);
