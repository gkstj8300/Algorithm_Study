// const [a, b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let lank = Number(a.split(' ')[1].replace('\r',''));
console.log(b.split(' ').map(Number).sort((a, b) => b - a)[lank-1]);