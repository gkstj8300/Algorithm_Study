var fs = require('fs');
// const a = fs.readFileSync("input.txt").toString().trim().split("\n");
const a = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(Number(a[0]));
console.log(result);

function solution(N) {
    let line = 0;
    let maxValue = 0;
    while ( maxValue < N) {
        maxValue += ++line;
    }
    let idx = N - (maxValue - line);
    
    return line % 2 == 0 ? idx+'/'+ Number((line+1)-idx) : Number((line+1)-idx)+'/'+Math.abs(Number((line+1)-(line+1)-idx));
}