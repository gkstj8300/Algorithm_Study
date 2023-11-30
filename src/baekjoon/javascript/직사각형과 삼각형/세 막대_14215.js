const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(a[0].split(' ').map(Number));
console.log(result);

function solution(d) {
    let [a,b,c] = d.sort((a,b)=>a-b);
    if(a + b > c){
        return a + b + c
    }else{
        return (( a + b ) * 2) - 1
    }
}