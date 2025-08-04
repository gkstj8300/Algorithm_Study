const [p, ...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const a = i1.map((data) => data.replace('\r','').split(' ').map(Number))[0];
const b = i1.map((data) => data.replace('\r','').split(' ').map(Number))[1];
const sum = a.concat(b);
console.log(sum.sort((a, b) => a - b).join(' '));