function solution(answers) {
  let result = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let fir = "12345".repeat(2000).split("");
  let se = "21232425".repeat(1250).split("");
  let th = "3311224455".repeat(1000).split("");

  answers.map((reV, index) => {
    reV == fir[index] ? count1++ : 0;
  });

  answers.map((reV, index) => {
    reV == se[index] ? count2++ : 0;
  });

  answers.map((reV, index) => {
    reV == th[index] ? count3++ : 0;
  });
  let array = [count1, count2, count3];
  array.map((reV, index) => {
    reV == Math.max(...array) ? result.push(index + 1) : 0;
  });
  console.log(result);
  return;
}

solution([1, 2, 3, 4, 5]);
/* 이 문제를 푸는데 있어서도 어떻게 할지 방법은 아는데 코드를 구현하는데
시간이 오래걸렸다. 푸는 사람은 어차피 3명 밖에 없으니까 그 형식을 배열로 저장한다음에
map이라는 함수를 이용해서 현재 값과 문제의 답이 같으면 count를 올리는 방식으로
했고, 나온 count 값으로 제일 큰 수를 찾아서 다른 수와 비교하면서 제일 큰수와
맞으면 그 값을 빈 array에 넣었고, 그 값을 리턴했다.*/
