function solution(strings, n) {
  strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];
    // 배열(strings)을 받고 n번쨰 자릿수를 받는다.
    if (first === second) {
      /*  first와 second가 같으면 문자열이 같은 것이므로 그
    부분은 문자열 자체를 비교한다. */
      return (a > b) - (a < b);
      /* (a>b)가 양수면 (a<b)무조건 음수이다.
      반대도 한쪽이 음수면 한쪽이 양수다. 그 점을 이용해서 (a <b)가
      음수면 무조건 양수를 반환하고 아니면 음수를 반환한다. 양수를 반환하면
      sort 함수가 a가 b보다 큰수로 인지하고 뒤로 보낸다.*/
    } else {
      return (first > second) - (first < second);
    }
  });
  return console.log(strings);
}

solution(["sun", "bed", "car"], 1);
