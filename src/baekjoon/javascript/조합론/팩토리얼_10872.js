const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(Number(n));
function solution(input) {
    if (!input || input === 1) return 1;
    return input * solution(input - 1);
}
console.log(result);