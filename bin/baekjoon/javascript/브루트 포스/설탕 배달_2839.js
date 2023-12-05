// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let input = Number(a[0]);
let count = 0;

while(true){
    if(input % 5 === 0){
        count += input / 5;
        break;
    } 
    input -= 3;
    count++;
    if(input < 0) {
        count = -1;
        break;
    }
    
}
console.log(count);