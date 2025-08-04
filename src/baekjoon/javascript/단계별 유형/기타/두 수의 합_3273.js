const [i1, i2, i3] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1, i2, i3] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = i2.split(' ').map(Number).sort((a, b) => a - b);
let n = Number(i1);
const m = Number(i3);
let count = 0;
let start = 0;
let end = n - 1;

while(start < end){
    if((arr[start]+arr[end]) === m){
        start++;
        count++;
    } else if(arr[start] + arr[end] > m) {
        end--;
    } else {
        start++
    }
}
console.log(count);