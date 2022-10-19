// 나머지가 1이 되는 수

function solution(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      result = i;
      break;
    }
  }
  console.log(result);
}

solution(10);
