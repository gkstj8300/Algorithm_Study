const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(i1);
let arr = Array.from({length : n + 1}).fill(0);
for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + 1;
  if (i % 2 === 0) {
    arr[i] = Math.min(arr[i / 2] + 1, arr[i]);
  }
  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i / 3] + 1, arr[i]);
  }
}
console.log(arr[n]);