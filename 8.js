function solution(n) {
  let answer = "";
  let par = String(n);
  let par_split = par.split("");
  let reverse_arr = par_split.sort((a, b) => b - a);
  let toNumbers = (arr) => arr.map(Number);
  let arr = toNumbers(reverse_arr);
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return console.log(Number(answer));
}

solution(118372);

/* 정수 내림차순으로 배치하기

이 문제는 그냥 형변환을 계속 해주면 되는 것이었다. split을 쓰기 위해 n을 string
으로 바꾸고 바꾼 것을 sort함수로 내림차순으로 만들었다. 그 다음에 각 요소가
string으로 되어있기 때문에 Number화 하고 
그 값을 for로 돌려서 순선대로 값을 answer에 집어넣었다.*/
