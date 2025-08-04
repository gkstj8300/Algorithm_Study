const [p, n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a = n.split(' ').map(Number).sort((a,b) => a-b);
let result = 0;
let max = Math.max(...a);
let min = Math.min(...a);
if(a.length >= 2){
    result =  max * min;
} else {
    result = min * min;
}
console.log(result);