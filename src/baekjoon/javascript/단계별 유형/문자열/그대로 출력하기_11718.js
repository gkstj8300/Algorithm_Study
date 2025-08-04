var fs = require('fs');
// const [...a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [...a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution([...a]);
console.log(result);

function solution(a) {
    let arr = a.map((data) => data.replace(/\r/g,''));
    return arr.join(' ');
}