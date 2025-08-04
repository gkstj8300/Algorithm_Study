// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(b.map((data) => Number(data.replace('\r',''))).sort((a, b) => a- b).join('\n'));