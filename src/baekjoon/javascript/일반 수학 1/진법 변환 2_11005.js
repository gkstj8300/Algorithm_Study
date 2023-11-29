// const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a);
console.log(result);

function solution(a) {
    let a_data = a.split(' ');
    let data = Number(a_data[0]).toString(Number(a_data[1]));
    return data.toUpperCase();
}