const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = i1.split(' ').map(Number);
let arr = Array.from({ length: n }, (_, index) => index + 1);
let result = [];
let count = 0;
let minus = m - 1;
while(arr.length > 0){
    count = (count + minus) % arr.length;
    result.push(arr[count]);
    arr.splice(count, 1);
}
console.log(`<${result.join(', ')}>`);