// const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a_data = Number(a[0]);
let result = 0;
let min = a_data - a[0].length * 9;

for(let i = min; i <= a_data; i++){
    let sum = String(i).split('').map(Number).reduce((acc, data) => acc += data);
    if(i + sum === a_data){
        result = i;
        break;
    }
}
console.log(result);