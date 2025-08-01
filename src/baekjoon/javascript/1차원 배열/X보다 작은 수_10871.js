const fs = require("fs");
const [a, b] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(a, b);
console.log(result)

function solution(a, b) {
  const [_, f] = a.split(' ');
  return b.split(' ').filter(v => Number(v) < Number(f)).join(' ');;
}