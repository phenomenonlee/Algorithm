function solution(n) {
  let three_reverse = "";
  let three = n.toString(3);
  console.log(three);
  do {
    three_reverse = three % 10;
    console.log(three_reverse);
    three = Math.floor(three / 10);
  } while (three > 0);
  console.log(parseInt(three_reverse, 3));
  return;
}

solution(99999999);

/*  이걸로 제출에서 문제 하나만 틀린거 실화냐?

const solution = (n) => parseInt([...n.toString(3)].reverse().join(""), 3);
그래서 이걸로 제출함
*/

/* 2번 테스트 안 되신 분들을 위해 답니다. [ 스포주의 : 아는사람만 보일것 ]
2번째 테스트 값이 주어진 문제 n의 마지막 값인 것으로 확인을 했습니다.
어떻게 했냐면
n= n.toString(3);
three_reverse = n % 10;
n % 10 = 253-1

20222011112012201
2022201111201220

solution(100000000); */
