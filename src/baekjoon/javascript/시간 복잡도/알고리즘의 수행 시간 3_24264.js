// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(Number(a[0]));

function solution(a) {
    console.log(a*a);
    console.log(2);
}