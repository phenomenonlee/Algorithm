function solution(s) {
  let answer = "";
  let text = s.split(" ");
  console.log("1", text);
  for (i = 0; i < text.length; i++) {
    let de = text[i].split("");
    console.log("2", text[i]);
    for (j = 0; j < de.length; j++) {
      if (j % 2 === 0) {
        answer += de[j].toUpperCase();
      } else {
        answer += de[j].toLowerCase();
      }
    }
    console.log("3", answer);
    if (i == text.length - 1) {
      break;
    }
    answer += " ";
  }
  console.log("5", answer);
  return answer;
}

solution("  asdfasdf SDF sdfdfDddDddDdDdf sdf    ");
