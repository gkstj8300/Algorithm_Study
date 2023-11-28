var fs = require('fs');
// const [a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a.split(' '));
console.log(result);

function solution(a) {
    const piece = [1, 1, 2, 2, 2, 8];
    let arr = piece.map((data, idx) => data - a[idx]);
    return arr.join(' ');
}