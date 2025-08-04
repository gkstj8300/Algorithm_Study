// const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(Number(a));
console.log(result);

function solution(a) {
    let result = [];
    for(let i = 2; i <= a; i++){
        if(a % i == 0){
            a = a / i;
            result.push(i);
            i--;
        }
    }
    return result.join(' ');
}