function solution(s) {
  return s
    .split(" ")
    .map((e) => {
      if (e === "") {
        return e;
      } else if (!isNaN(e[0])) {
        return e.toLowerCase();
      } else {
        return e[0].toUpperCase() + e.slice(1).toLowerCase();
      }
    })
    .join(" ");
}

console.log(solution("3people     unFollowed me  "));
console.log(solution("for the    last week   "));
console.log(solution("aaaaaa"));
console.log(solution(" Aadssd  a  a  a "));
console.log(solution("            3saFFfa dd Svxcv  sdVs"));
