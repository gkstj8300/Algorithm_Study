// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let b = a[0].split(' ').slice(0,3).map(Number);
let c = a[0].split(' ').slice(3,6).map(Number);

for(let i = -999; i <= 999; i++){
    for(let j = -999; j <= 999; j++){
        if(b[0] * i + b[1] * j == b[2] && c[0] * i + c[1] * j == c[2]){
            console.log(i+' '+j);
            break;
        }
    }
}