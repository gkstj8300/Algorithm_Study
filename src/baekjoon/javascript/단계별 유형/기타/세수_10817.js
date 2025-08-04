const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(n.split(' ').map(Number).sort((a,b) => b-a)[1]);