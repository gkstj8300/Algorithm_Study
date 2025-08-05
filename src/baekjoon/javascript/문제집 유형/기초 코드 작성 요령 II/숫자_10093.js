const fs = require("fs");
const [a, b] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split(" ").map(Number);

let result = solution(a, b);
console.log(result);

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const result = [];

  for (let i = min + 1; i < max; i++) {
    result.push(i);
  }

  return `${result.length}\n${result.join(" ")}`;
}