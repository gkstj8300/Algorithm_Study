const fs = require("fs");
const [a, b, c] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(a, b, c);
console.log(result)

function solution(a, b, c) {
  return b.split(' ').filter(v => v === c).length;
}