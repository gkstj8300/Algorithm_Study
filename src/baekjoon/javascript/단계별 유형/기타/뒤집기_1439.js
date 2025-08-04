const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = i1.match(/(1+|0+)/g);
let result = Array.from({length: 2}).fill(0);

for(let val of arr){
    if(val.includes(0)){
        result[0] += 1;
    } else {
        result[1] += 1;
    }
}
console.log(Math.min(...result));