function solution(x) {
  let n = x;
  let arr = [];
  do {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  } while (x > 0);

  function sum(first, recent) {
    const result = Number(first) + Number(recent);
    return result;
  }
  let result = arr.reduce(sum, 0);
  if (n % result == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
  return;
}

solution(123);

/*  하샤드 수 
이 문제를 처음에 잘 못 이해했었다. 처음고 끝자리 수만 더하면 되는 줄 알았는데
모든 자리에 값을 더하는 것이었다. 그래서 사용한 방법은 빈 arr를 만들고
  x를 10으로 나눈 값을 하나씩 arr에 추가하는 것이었다. x를 10으로 나누면 무조건 
  마지막 자릿수를 받을 수 있기 때문에 이 방법을 사용했다. 그리고 do 함수 안에 x를 
  10으로 나눈 몫을 Math.floor로 마지막 자릿수를 없애거나 나누고 이 함수를 x가 0이 
  될 떄까지 실행을 했다. 그 다음에는 reduce 함수를 사용해서 안에 있는 값을
  다 더하고 나누어서 0이 되면 하샤드 수로 true를 아니면 false를 리턴했다.
  
  이 방법 말고 처음에 받은 값을 split로 배열로 만든 다음 reduce를 사용해서
  다 더한 다음 하샤드 수 조건을 해도 됐을 것이다.
  */
