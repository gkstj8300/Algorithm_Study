const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const numbers = input.slice(1).map(Number);
  numbers.sort((a, b) => b - a);
  console.log(numbers.join("\n"));
}
