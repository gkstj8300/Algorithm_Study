var fs = require('fs');
// const [a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a);
// console.log(result);

function solution(n) {
    for (let i=0; i<n*2-1; i++) {
        let l = n*2-1;
        let p = i*2+1;
        if (l < p) {
            p += (l-p)*2
        } 
        console.log(Array(n-p/2-0.5).fill(" ").join("") + Array(p).fill("*").join(""));
    }
}