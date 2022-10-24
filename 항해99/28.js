// 최대공약수와 최대 공배수

function solution(n, m) {
  let left = [];
  let right = [];

  /*  먼저 두개의 for문을 돌려서 n과 m에 약수를 가지고 온다. 그리고 그 값을 
  빈 배열 left와 right에 저장한다.*/
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      left.push(i);
    }
  }
  for (let z = 1; z <= m; z++) {
    if (m % z === 0) {
      right.push(z);
    }
  }

  /* 여기서는 약수만 남은 두배열을 비교해서 공통된 부분을 찾고 그 중 가장 큰 값을 가져오는데
  가장 큰 값이 최대 공약수이다. */
  let result = [];
  if (left.length < right.length) {
    result = left.filter((x) => right.includes(x));
  } else {
    result = right.filter((x) => left.includes(x));
  }

  /* 이부분인 핵심인데 n 곱하기 m을 한 값은 최대 공약수와 최소 공배수를 곱한 값이라는 것이다.
  n*m = 최대 공약수 * 최소 공배수

  즉 최대 공배수는 n * m / 최대공약수이다.
  */
  const max = result[result.length - 1];
  const min = (n * m) / max;

  console.log(max, min);
}

solution(2, 5);
