const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = i1.split(' ').map(Number);
const arr = Array.from({ length: n }, (_, index) => index + 1);
let resultSet = [];
for(let i = 0; i < n; i++){
    resultSet.push(String(arr[i]).split('').filter(num => num === String(m)).length)
}
let result = resultSet.reduce((acc, data) => acc += data);
console.log(result);