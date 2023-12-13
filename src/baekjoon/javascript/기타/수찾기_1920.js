const [i1, i2, j1, j2] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1, i2, j1, j2] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = new Set();
i2.split(' ').map((data) => { a.add(Number(data)); });
let b = j2.split(' ').map(Number);
let result = [];
b.forEach((data) => {
    a.has(data) ? result.push(1) : result.push(0);
});

console.log(result.join('\n'));