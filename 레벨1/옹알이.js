function solution(babbling) {
    let count = 0;

    babbling.forEach((e) => {
        e = e
            .replaceAll("aya", "1")
            .replaceAll("ye", "2")
            .replaceAll("woo", "3")
            .replaceAll("ma", "4");

        console.log(e, "origin");
        for (i = 0; i < e.length; i++) {
            if (e[i] === e[i + 1]) {
                break;
            }
            if (!e.match(/[^0-9]/)) {
                console.log(e.match(/[^0-5]/));
                count++;
            }
        }
    });

    return count;
}

// console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
