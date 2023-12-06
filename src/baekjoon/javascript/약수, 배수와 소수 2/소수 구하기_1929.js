// const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [b, c] = a.split(' ').map(Number);
let result = [];
for(let i = b; i <= c; i++){
    if(isPrime(i)){
        result.push(i);
    }
}


console.log(result.join('\n'));

function isPrime(n) {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0) return false
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(n % i === 0) return false;
    }
    return true;
}