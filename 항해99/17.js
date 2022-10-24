function solution(lottos, win_nums) {
  let array_result = [];
  let array = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
  ];
  let overLap_zero = lottos.filter((play) => {
    if (play === 0) {
      return true;
    }
  });
  let remove = lottos.filter((curV) => curV !== 0);
  let intersection = win_nums.filter((x) => remove.includes(x));

  let result_max = array.find((value) => {
    if (value.num === overLap_zero.length + intersection.length) {
      return true;
    }
  });

  let result_min = array.find((value) => {
    if (value.num === intersection.length) {
      return true;
    }
  });
  array_result.push(result_max.num);
  array_result.push(result_min.num);
  console.log(array_result);
  return;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
/* 1	6개 번호가 모두 일치
2	5개 번호가 일치
3	4개 번호가 일치
4	3개 번호가 일치
5	2개 번호가 일치
6(낙첨)	그 외 */
