const a = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const a = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let input = Number(a[0]);
let result = 0;
for(let i = 666; ; i++){
    if(input === 0){
        result = i;
        break;
    }
    if(i.toString().includes('666')){
        input--;
    }
}
console.log(result-1);