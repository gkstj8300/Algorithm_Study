const [t] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [t] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = 1;
let b = 1;
let [n, m] = t.split(' ').map(Number)

for (i = 0; i < m; i++) {
  a *= n - i;
  b *= m - i;
}

console.log(a / b);