// const [a, b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(Number(a), Number(b));
console.log(result);

function solution(a, b) {
    return a* b;
}