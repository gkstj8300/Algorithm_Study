const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [a, b] = n.split(' ').map(Number);

function getMinData(a, b){
    let num = 0;
    while(b != 0){
        num = a;
        a = b;
        b = num % b;
    }
    return a;
}
console.log((a * b) / getMinData(a, b));