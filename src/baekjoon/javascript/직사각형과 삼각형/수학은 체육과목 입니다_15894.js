// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(a);
console.log(result);

function solution(a) {
    return a * 4;
}