// const [...arr] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let arrData = arr[0].split(' ').map(Number);
let result = solution(arrData[0],arrData[1],arrData[2]);
// console.log(result);

function solution(A, B, V) {
    console.log(Math.ceil((V-B) / (A-B)));
}  