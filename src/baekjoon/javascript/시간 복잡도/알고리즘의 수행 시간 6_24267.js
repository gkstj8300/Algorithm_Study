// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = BigInt(Number(a[0]));
let result = (n * (n-BigInt(1)) * (n-BigInt(2))) / BigInt(6)
console.log(String(result));
console.log(3);