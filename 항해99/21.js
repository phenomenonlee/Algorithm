function solution(nums) {
  let len = nums.length,
    answer = 0;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    /*  n에 제곱근을 씌운 수보다 낮게 한 이유는 무조건 n을 제곱근 한 값보다. n의 인수가 낮기 때문이다. n=pq,(1<p<=q)일 때 p의 최대값은 p^2=n이다. p < (n의 제곱근)이다.
    p^2=n인 경우를 제외하고서 */
    if (n % i === 0) {
      console.log(n);
      return false;
    }
  }
  console.log(n);
  return true;
};

solution([1, 2, 80]);
