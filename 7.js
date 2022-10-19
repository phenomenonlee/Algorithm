function solution(n) {
  let answer = String(n);
  let an_s = answer.split("");
  let result = an_s.reverse();

  let toNumbers = (arr) => arr.map(Number);

  return console.log(toNumbers(result));
}

solution(12345);

/*  이문제는 거의 함수를 사용해서 풀었다. 먼저 n 값을 string화 해서 그 값을
split로 배열을 만들었다. 그 다음 그 값을 reverse 함수를 이용해서 배열을
뒤집었고 마지막으로 배열에 각 요소가 string으로 되어있기 때문에 그 값을 
다시 number로 바꾸어주었다. 
이 문제를 풀면서 원래 sort를 사용해서 배열을
뒤집으려고 했는데 sort는 뒤집어 주는게 아니고 정렬을 해주는 함수였다. 그래서
reverse를 사용했다.

function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

이건 다른 사람의 풀이 인데 너무 잘 풀어서 가지고 왔다.*/
