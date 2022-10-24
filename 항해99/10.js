function solution(arr) {
  let answer = Math.min.apply(null, arr);

  for (i = 0; i < arr.length; i++) {
    if (arr.length == 1) {
      console.log(-1);
    } else if (arr[i] == answer) {
      arr.splice(i, 1);
      console.log(arr);
    }
  }
  return;
}

solution([10]);
/* 이 문제는 배열에 최솟값을 먼저 찾은 다음 반복문을 돌려서 값이 최솟값이랑
같아지면 그 값을 받은 인덱스 값으로 지우고 리턴하고 그전에 배열의 길이가 1이면 -1을 리턴하게 했다.*/

function answer(arr) {
  let solved = [arr];
  let result = "";
  let answer = arr.sort((a, b) => b - a);
  for (i = 0; i < answer.length; i++) {
    if (!answer[i + 1]) {
      result = answer[i];
    }
  }
  let solve = answer.filter((element) => element !== result);
  if (solve.length == 0 && 1) {
    return [-1];
  } else {
    return solve;
  }
}

/* 이 문제는 위에 것이 정답이다. 밑에 방법으로 푼 것은 arr 값에 sort를 써버리면 배열에 순서가 바뀐다. 그래서 배열 값을 처음에 다른 값에다가 저장을 하고 했는데도
배열의 순서가 바뀌어져 있었다. 같이 영향을 받는 것 같다.  */
