function solution(s) {
  let zeroCnt = 0;
  let twoCnt = 0;
  function result() {
    if (s.length === 1) return zeroCnt;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        ++zeroCnt;
      }
    }
    ++twoCnt;
    s = s.replace(/0/g, "").length.toString(2);
    result();
  }
  result();
  return [twoCnt, zeroCnt];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
