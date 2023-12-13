const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = [];
for(let i = 0; i < i1.length; i++){
    arr.push(i1.slice(i, i1.length));
}
console.log(arr.sort().join('\n'));