const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n").map(Number);

let result = solution(input);
console.log(result);

function solution(input) {
  let arr = input.filter(v => v % 2 === 1);
  if (arr.length === 0) {
    return -1;
  } else {
    return arr.reduce((a, c) => a + c, 0) + '\n' + arr.sort((a, b) => a - b)[0]
  }
}