const [p, i1, i2] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, i1, i2] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = i1.split(' ').map((data) => Number(data.replace('\r',''))).sort((a, b) => a - b);
let b = i2.split(' ').map((data) => Number(data.replace('\r',''))).sort((a, b) => b - a);
let resultArr = [];
for(let i = 0; i < p; i++){
    resultArr.push(a[i]*b[i]);
}
let result = resultArr.reduce((acc, data) => acc += data);
console.log(result);