function solution(n) {
  let answer = Math.sqrt(n);
  if (answer % 1 === 0) {
    console.log(Math.pow(answer + 1, 2));
  } else {
    console.log(-1);
  }
  return;
}

solution(3);
/* 이 문제는 n의 값을 받은 다음 먼저 루트를 사용해준다. 그리고 나서 그 나온 
값을 1로 나누어서 참이면 제곱이 된 양의 정수이고 나머지 값이 0이 아니면 
정수가 아니다. 그래서 -1을 리턴해주었다. */
