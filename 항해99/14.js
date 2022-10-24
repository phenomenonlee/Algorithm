function solution(sizes) {
  let answer = [];
  for (i = 0; i < sizes.length; i++) {
    answer.push(sizes[i][0]);
    answer.push(sizes[i][1]);
  }
  console.log("1", answer);
  answer.sort((a, b) => a - b);
  console.log("2", answer);
  let first = answer.slice(0, answer.length / 2);
  let last = answer.slice(answer.length / 2, answer.length);
  console.log("3", first, last);
  console.log("4", Math.max.apply(null, first) * Math.max.apply(null, last));

  return;
}

solution([
  [7, 1],
  [3, 12],
  [7, 7],
  [7, 14],
  [5, 7],
  [10, 13],
]);

[
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

[
  [7, 10],
  [3, 12],
  [8, 15],
  [7, 14],
  [5, 15],
];
