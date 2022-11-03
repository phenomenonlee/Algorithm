function solution(new_id) {
    // 2단계 - 2단계를 먼저 하는 것이 밑에 반복문 횟수를 더 줄일 수 있을 것 같아 이렇게 진행했다.
    new_id = new_id
        .replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g, "") // 2단계
        .replace(/\.+/g, ".") // 3단계
        .replace(/^[.]/g, "") // 4딘계
        .replace(/[.]$/g, ""); // 4딘계

    // 1단계
    for (let i of new_id) {
        if (i === i.toUpperCase()) {
            new_id = new_id.replace(i, i.toLowerCase());
        }
    }

    // 5단계
    if (new_id === "") {
        new_id = "a";
    }

    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.substring(0, 15).replace(/[.]$/g, "");
    }

    // 7 단계
    while (new_id.length < 3) {
        new_id += new_id.charAt(new_id.length - 1);
    }

    return new_id;
}

/* function solution(new_id) {
    new_id = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, "") // 2
        .replace(/\.+/g, ".") // 3
        .replace(/^\.|\.$/g, "") // 4
        .replace(/^$/, "a") // 5
        .slice(0, 15)
        .replace(/\.$/, ""); // 6

    return new_id.padEnd(3, new_id[new_id.length - 1]);
} */

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
