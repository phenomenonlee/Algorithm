function solution(dartResult) {
    let array = [];
    let darts = [];

    let dart = dartResult.split(""); // dartResultstirng 한글자로 이루어진 배열로 만들고 dart에 할당한다.

    for (let i = 0; i < dart.length; i++) {
        if (dart[i] === "1" && dart[i + 1] === "0") {
            dart.splice(i, 2, "10");
        }
        darts.push(dart[i]);
    } // dart 배열에서 1과 0이 연속으로 이루어진 배열의 요소들을 찾아 묶어준다. - ['1', 'D', '2', 'S', '#', '10', 'S'] 이런식으로

    // 그 다음에는 배열에서 S, D, T를 기준으로 잡아서 뒤에 *과 #이 있냐 없냐로 분기를 나눠준다.
    // *과 #이 있을 때 *은 2를 곱해줘서 array 배열에 집어넣고 #은 -1 곱해서 배열에 집어 넣는다.
    // *일 때는 하나의 분기 처리를 더 해주어서 만약 array 배열 맨 마지막 요소가 있으면 마지막 요소에 2를 곱해주어서 * 옵션을 충족했다.

    // *과 #이 없을 때는 S, D, T에 따라  1,2,3제곱 한 값을 배열에 집어 넣었다.

    // 그러면 최종적으로 array 배열에는 다트 값이 환산 되어 있다. 그 값을 reduce를 써서 합계를 구해 문제를 풀어주었다.

    for (let i = 0; i < dart.length; i++) {
        if (dart[i] === "S" && (dart[i + 1] === "*" || dart[i + 1] === "#")) {
            if (array[array.length - 1] && dart[i + 1] === "*") {
                array[array.length - 1] = array[array.length - 1] * 2;
            }
            array.push(Number(dart[i - 1] * (dart[i + 1] === "*" ? 2 : -1)));
            continue;
        } else if (
            dart[i] === "S" &&
            (dart[i + 1] !== "*" || dart[i + 1] !== "#")
        ) {
            array.push(Number(dart[i - 1]));
            continue;
        }
        //////
        if (dart[i] === "D" && (dart[i + 1] === "*" || dart[i + 1] === "#")) {
            if (array[array.length - 1] && dart[i + 1] === "*") {
                array[array.length - 1] = array[array.length - 1] * 2;
            }
            array.push(
                Number(dart[i - 1] ** 2 * (dart[i + 1] === "*" ? 2 : -1))
            );
            continue;
        } else if (
            dart[i] === "D" &&
            (dart[i + 1] !== "*" || dart[i + 1] !== "#")
        ) {
            array.push(Number(dart[i - 1] ** 2));
            continue;
        }
        /////
        if (dart[i] === "T" && (dart[i + 1] === "*" || dart[i + 1] === "#")) {
            if (array[array.length - 1] && dart[i + 1] === "*") {
                array[array.length - 1] = array[array.length - 1] * 2;
            }
            array.push(
                Number(dart[i - 1] ** 3 * (dart[i + 1] === "*" ? 2 : -1))
            );
            continue;
        } else if (
            dart[i] === "T" &&
            (dart[i + 1] !== "*" || dart[i + 1] !== "#")
        ) {
            array.push(Number(dart[i - 1] ** 3));
            continue;
        }
    }
    return array.reduce((pre, curV) => pre + curV, 0);
}

console.log(solution("1D2S#10S"));
