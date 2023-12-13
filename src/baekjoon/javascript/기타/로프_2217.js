const [p, ...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n").map(Number);
// const [p, ...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = i1.sort((a, b) => a - b);
let result = [];
for(let i = 0; i < p; i++){
    result.push(arr[i] * (p-i));
}
console.log(Math.max(...result));