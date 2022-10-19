function solution(s) {
  let split = s.split("");
  const split_result = split.sort((a, b) => {
    return (a < b) - (a > b);
    /* (Z < b)인 경우는 값이 false가 된다. 그러면 -1을 리턴할 것이다. 그러면 무조건 (Z > b)는 1을 리턴한다.
    그리고 나온 값을 빼면 -2가 된다. sort에서는 음수가 리턴 되면 a가 b보다 작은 것으로 간주하고 b보다 뒤로 보낸다.
      내림차순으로 만들 때 이 방법을 쓰면 된다.*/
  });
  return split_result.join("");
}

solution("Zbcdefg");
