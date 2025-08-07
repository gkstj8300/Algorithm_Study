const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const arr = input.slice(1).map(v => v.trim());
  const result = arr.sort((a, b) => Number(a.split(' ')[0]) - Number(b.split(' ')[0]));
  console.log(result.join('\n'));
}
