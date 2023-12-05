// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(a[0].split('').map(Number).sort((a, b) => b - a).join(''));