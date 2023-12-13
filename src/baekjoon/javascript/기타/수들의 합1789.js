const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(i1);
let count = 0;
let sum = 0;
while(true){
    sum += count+1;
    count++;
    if(sum > n){
        count--;
        break;
    }
}
console.log(count);