const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = BigInt(a);
console.log(`${n * n * n}`);
console.log(3);