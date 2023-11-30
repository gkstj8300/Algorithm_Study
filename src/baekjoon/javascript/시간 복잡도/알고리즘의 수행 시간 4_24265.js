const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
for(let i = 1; i <= a-1; i++){
    sum += i;
}
console.log(sum);
console.log(2);