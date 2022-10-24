function solution(array, commands) {
  for (i = 0; i < commands.length; i++) {
    let a = commands[i][0];
    let b = commands[i][1];
    let c = commands[i][2];
    array.splice(a, b);
  }
  console.log();
  return;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
