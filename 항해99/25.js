function solution(left, right) {
  let result = [];
  let array = [];
  for (let i = left; i <= right; i++) {
    for (let z = 1; z <= i; z++) {
      let divide = i % z;
      if (divide === 0) {
        array.push(divide);
      }
    }
    let count = array.length;
    if (count % 2 === 0) {
      result.push(i);
    } else {
      result.push(-i);
    }
    array = [];
  }

  const sum = result.reduce((a, b) => a + b);
  return;
}

solution(13, 17);
