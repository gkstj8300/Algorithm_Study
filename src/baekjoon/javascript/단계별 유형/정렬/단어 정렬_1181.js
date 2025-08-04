// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = '';
b.filter((data, idx) => b.indexOf(data) == idx)
    .map((data) => data.replace('\r',''))
    .sort()
    .sort((a, b) => a.length - b.length)
    .forEach((data) => result += `${data}\n`);
console.log(result);