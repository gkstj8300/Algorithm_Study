// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
a.pop();
let input = a.map((data) => Number(data.replace('\r','')));
let result = [];
input.forEach((data) => {
    let count = 0;
    for(let i = data + 1; i <= data * 2; i++){
        if(isPrime(i)){
            count++;
        }
    }
    result.push(count);
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