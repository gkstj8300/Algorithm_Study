const [p, i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = p.split(' ').map(Number);
let input = i1.split(' ').map(Number);
let arr = Array.from({length : input.length}).fill(0);
let result = new Set();
console.log(arr);

for(let i = 1; i < input.length + 1; i++){
    arr[i] = arr[i - 1] + input[i - 1];
}

for(let j = m; j <= n; j++){
    result.add(arr[j] - arr[j - m]);
}