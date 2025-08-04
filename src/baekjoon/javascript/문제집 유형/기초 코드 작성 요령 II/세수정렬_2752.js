const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split(" ");

let result = solution(input);
console.log(result);

function solution(input) {
  return input.map(Number).sort((a, b) => a - b).join(' ');
}