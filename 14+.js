function solution(sizes) {
  let width = [];
  let height = [];
  for (i = 0; i < sizes.length; i++) {
    sizes[i][0] > sizes[i][1]
      ? width.push(sizes[i][0])
      : width.push(sizes[i][1]);

    sizes[i][0] < sizes[i][1]
      ? height.push(sizes[i][0])
      : height.push(sizes[i][1]);
  }
  console.log(width, height);
  console.log(Math.max.apply(null, width) * Math.max.apply(null, height));
  return;
}
solution([
  [50, 60],
  [30, 70],
  [60, 30],
  [80, 40],
]);
/* 레알 나 개천재인듯  먼저 가로랑 세로 길이를 계산한 뒤에 큰 값을 한곳에 몰아주고
작은 값을 한 곳에 몰아준 다음에 그 중 제일 큰 값을 가져오면 되는 거였음

이 방법을 찾게 된 계기가 있다. 입출력 예에서 보여준 것에서 답까지 되는 과정을 계속
생각해 보았다. 그래서 결국에는 w h 값 중에서 큰 값이 한쪽으로 가고 작은 값이 반대 배열로
가게 된다는 것을 알게 되었다. 그것을 기반으로 풀게 되었다.*/
[
  [60, 50],
  [70, 30],
  [60, 30],
  [80, 40],
];
[
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];
[
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];
