function solution(numbers) {
  let array = [];
  let array_num = numbers.sort((a, b) => a - b);
  let f_array = [...new Set(array_num)];
  let l_array = [...new Set(array_num)];

  const findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);
  const duplicates = findDuplicates(array_num);

  for (i = 0; i < duplicates.length; i++) {
    let dubble = duplicates[i] + duplicates[i];
    array.push(dubble);
  }

  function play(cur, index) {
    for (i = 1; i < l_array.length; i++) {
      array.push(cur + l_array[i]);
    }
    l_array.shift();
  }

  let map = f_array.map(play);

  return [...new Set(array)].sort((a, b) => a - b);
}

/* 이 문제는 원리는 어떻게 푸는지 원리는 알았는데 코드로 구현하는데 시간이 너무
오래 걸린 문제였다. 먼저 map 함수를 사용해서 배열에 모든 요소에 관해 함수를 실행하게
하였고 함수의 기능은 현재 있는 요소를 자신을 제외한 다른 요소에 다 더해서 array에
추가하는 것이었다. 물론 이 기능을 하기 전에 중복을 제거하고, 순서를 오름차순으로 
바꾸어서 했다. 그리고 7-14번쨰 줄은 맨 처음에 중복을 없앴기 때문에 중복을 없애기
전에 먼저 중복 값을 뽑아내서 뽑아 낸 중복 값끼리 더해 중복이 있을 경우를 처리하였다. */
