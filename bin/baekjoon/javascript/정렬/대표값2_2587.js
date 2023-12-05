// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = a.map((data) => Number(data.replace('\r','')));
console.log(result.reduce((acc, data) => { return acc += data })/result.length);
console.log(result.sort((a , b) => a - b)[Math.round(result.length/2)-1]);