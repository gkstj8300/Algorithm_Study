// const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a);
console.log(result);

function solution(a) {
    let a_data = a.split(' ');
    let data = parseInt(a_data[0], Number(a_data[1]));
    return data;
}