const [i1, ...i2] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1, ...i2] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(i2.map((data) => Number(data.replace('\r',''))).sort((a,b) => a-b).join('\n'));