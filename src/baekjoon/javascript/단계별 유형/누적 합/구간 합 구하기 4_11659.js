const [p, n1, ...n2] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, n1, ...n2] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n1.split(' ').map(Number);
let b = n2.map((data) => data.replace('\r','').split(' ').map(Number));
let result = [];
const arr = Array.from({length : a.length + 1}).fill(0);

for(let i = 1; i < a.length + 1; i++) {
    arr[i] = arr[i - 1] + a[i - 1];
}
for(let j = 0; j < b.length; j++) {
    let [s, e] = b[j];
    result.push(arr[e] - arr[s - 1]);
}

console.log(result.join('\n'));