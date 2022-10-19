function solution(s) {
  let array = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let split = s.split("");
  let number = split.filter((curV, index, arr) => {
    /* 반대경우를 해서 문자를 숫자로 바꾸고 싶었는데 배열로 나누면 값을 한 글자밖에 받지 못한다.
      그래서  숫자를 문자로 바꾸는 것만 할 수 있다. */
    if (Number(curV)) {
      split.splice(index, 1, array[curV]);
      /*  filter는 새로운 배열을 만드는 함수이다. 그래서 여기서 if문을 보면 curV가 숫자일때만 true가 된다. 참이 되면  index는 현재 index 곧 if문에서 걸린 숫자의 index이고
      1은 하나의 요소를 지우겠다는 것이다. 옆에는 받은 인자로 값을 바꿔주겠다는 것이다. 4는 array에 있는 four로*/
      return;
    } else {
      return curV;
    }
  });
  console.log(split.join(""));
  return;
}

solution("one4seveneight");
