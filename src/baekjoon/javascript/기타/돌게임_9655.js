const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = parseInt(i1);
console.log(n % 2 === 0 ? 'CY' : 'SK');