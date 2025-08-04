// const [p, ...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [p, ...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a_data = a.map((data) => Number(data.replace('\r','')));
let result = a_data.map((data) => {
    for(let i = data; ; i++){
        if(isPrime(i)){
            return i;
        }
    }
});

console.log(result.join('\n'));

function isPrime(n) {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0) return false
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(n % i === 0) return false;
    }
    return true;
}