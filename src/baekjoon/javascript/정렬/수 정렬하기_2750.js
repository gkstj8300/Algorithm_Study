// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = b.map((data) => Number(data.replace('\r',''))).sort((a, b) => a - b);
console.log(result.filter((data, idx) => result.indexOf(data) == idx).join('\n'));