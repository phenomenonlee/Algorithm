/* function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") {
    return false;
  }
  while (s.length !== 0 && !(s === s.replace("()", ""))) {
    s = s.replace(/\(\)/g, "");
  }
  return s.length === 0 ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()(")); */

function solution(s) {
  let cnt = 0,
    length = s.length;

  if (s[0] === ")" || length % 2 !== 0 || s[length - 1] === "(") {
    return false;
  }

  for (let i = 0; i < length; i++) {
    s[i] === "(" ? ++cnt : --cnt;
    if (cnt < 0) return false;
  }
  return cnt === 0;
}
/* 
  let cnt = 0;
for (let i = 0; i < s.length; i++) {
  s[i] === "(" ? ++cnt : --cnt;
  if (cnt < 0) return false;
}
return cnt === 0; */

console.log(solution("()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
