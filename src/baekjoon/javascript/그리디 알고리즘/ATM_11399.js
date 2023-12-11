const [p, i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const n = i1.split(' ').map(Number).sort((a, b) => a - b);
const m = Number(p);
let count = 0;
for(let i = 0; i < m; i++){
    for(let j = 0; j <= i; j++){
        count += n[j];
    }
}
console.log(count);
