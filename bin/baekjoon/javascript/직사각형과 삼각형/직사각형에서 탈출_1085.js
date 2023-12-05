// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b = a[0].split(' ').map(Number);
let result = solution(b[0],b[1],b[2],b[3]);
console.log(result);

function solution(x, y, w, h) {
    let distanceX = Math.min(x, Math.abs(x-w));    
    let distanceY = Math.min(y, Math.abs(y-h));
    return Math.min(distanceX, distanceY);
}