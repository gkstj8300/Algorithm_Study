let result = solution(2, 1, 20);
console.log(result);

function solution(a, b, n) {
    let result = Math.floor(Math.max(n - b, 0) / (a - b)) * b;
    return result;
}

function solution(a, b, n) {
    let result = 0;
    while(n >= a) {
        result += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
    return result;
}