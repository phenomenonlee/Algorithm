function solution(nums) {
    const result = nums.length;

    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        //반복문을 써서 중복 되는 폰켓몬 종류를 제거
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            --i;
        }
    }

    if (result / 2 < nums.length) {
        return result / 2; // 총 포켓몬 갯수보다 가져갈 수 있는 포켓몬 종류의 수가 많으면 총 폰켓몬 개수 / 2의 값을 반환
    } else {
        return nums.length; // 반대의 경우는 가져갈 수 있는 폰켓못 개수를 반환
    }
}
/* 내가 생각했던 방법은 받은 배열을 정렬 해준다음에 반복문을 돌려 중복되는 값을 제거 해주면 
가져갈 수 있는 포켓몬 종류의 개수가 나올 것이라고 생각했다. 

따라서 반복문을 써서 중복 되는 폰켓몬 종류를 제거해주었다.

총 포켓몬 수 / 2 만큼 가져갈 수 있다고 조건이 있었으니
총 포켓몬 갯수보다 가져갈 수 있는 포켓몬 종류의 수가 많으면 총 폰켓몬 개수 / 2의 값을 반환해주고
반대의 경우는 가져갈 수 있는 폰켓못 개수를 반환해주었다. */
