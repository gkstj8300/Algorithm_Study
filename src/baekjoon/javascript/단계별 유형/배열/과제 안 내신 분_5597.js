var fs = require('fs');
// const [...b] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [...b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution([...b].map(Number));
console.log(result);

function solution(b) {
    let arr = Array.from({ length: 30 }, (_, index) => index + 1);
    return arr.filter((data) => !b.includes(data)).join(' ');
}