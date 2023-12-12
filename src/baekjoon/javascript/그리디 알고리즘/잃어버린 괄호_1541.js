const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = i1.split('-').map((data) => data.split('+').map(Number).reduce((acc, data) => acc += data));
let result =  arr[0] * 2 - arr.reduce((acc, data) => acc += data, 0);
console.log(result);