const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n").map(Number);
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let input = String(n).split('').map(Number);
let iArr = Array.from({length: 10}).fill(0);
let count = 0;
for(val of input) {
    if(val === 6 || val === 9){
        count++;
        if(count % 2 !== 0) {
            iArr[6] += 1;
        }
    } else {
        iArr[val] += 1;
    }
}
let result = Math.max(...iArr);
console.log(result);