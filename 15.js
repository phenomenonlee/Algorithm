//틀림
function solution(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
    if (arr.length == i) {
      return arr;
    }
  }
  return arr;
}

//맞음
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
}
