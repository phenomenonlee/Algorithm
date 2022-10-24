function solution(s, n) {
  let result = s.split("").map((curV, index) => {
    /* 먼저 받은 인자를 배열로 나누고 */
    if (curV == " ") {
      // 공백일 때
      return " ";
    } else if (curV.charCodeAt(0) == 1) {
      /* 이 부분을 짜다가 아직 구현을 못했다. 대문자 부분과 소문자 사이에
      다른 값이 있어서 이 부분을 어떻게 빼야 할지 고민 중이었다. */
      return;
    } else if (curV == "z") {
      //z일때는 96이 a 전에 있는 아스키 코드 값이다.
      return String.fromCharCode(96 + n);
    } else {
      return String.fromCharCode(curV.charCodeAt(0) + n);
    }
  });
  console.log(result.join(""));
  return result.join("");
}

solution("Z B z ", 25);
