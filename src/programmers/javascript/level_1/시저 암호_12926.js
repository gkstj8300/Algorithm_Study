let result = solution("a B z", 4);
console.log(result);

function solution(s, n) {
    const result = [...s].map((data) => {
        const charNum = data.charCodeAt(0);
        if (data === " ") {
            return " ";
        }
        if((charNum + n > 90 && charNum <= 90) || charNum + n > 122) {
            return String.fromCharCode(charNum + n - 26)
        }
        return String.fromCharCode(charNum + n);
    });
    return result.join("");
}