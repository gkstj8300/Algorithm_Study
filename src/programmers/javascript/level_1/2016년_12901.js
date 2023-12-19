let result = solution(5, 24);
console.log(result);

function solution(a, b) {
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const maxDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = 4+b;
    for(let i = 1; i < a; i++) {
        sum += maxDay[i];
    }
    return week[sum%7];
}