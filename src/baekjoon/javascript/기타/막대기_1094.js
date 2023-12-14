const [p] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(p);
let stick = 64;
let count = 0;

while(n > 0) {
    if(stick > n) {
        stick /= 2;
    } else {
        n -= stick;
        count++;
    }
}
console.log(count);