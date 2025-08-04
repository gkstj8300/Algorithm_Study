const [p, ...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = p.split(' ').map(Number);
const input = i1.map((data) => Number(data.replace('\r',''))).sort((a, b) => b - a);
let price = m;
let result = 0;
let count = 0;

while(price !== 0){
    if(Math.sign(price-input[count]) !== -1){
        price = price - input[count];
        result++;
    } else {
        count++;
    }
}
console.log(result);