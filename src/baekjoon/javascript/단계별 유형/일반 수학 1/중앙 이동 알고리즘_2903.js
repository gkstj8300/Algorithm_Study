// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(Number(a[0]));
console.log(result);

function solution(a) {
    let n = 0;
    for(let i = 1; i <= a; i++){
        n = 1 + Math.pow(2, i);
    }
    return n*n;
}