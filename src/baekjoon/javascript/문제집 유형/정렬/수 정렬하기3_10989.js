const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const arr = input.slice(1).map(Number);

  console.log(arr.sort((a, b) => a - b).join('\n'));
}
