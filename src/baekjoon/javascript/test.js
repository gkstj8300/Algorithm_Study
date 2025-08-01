const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let numInput = input.map(Number);
  let arr = Array.from({ length: 30 }, (_, index) => index + 1);
  return arr.filter(v => !numInput.includes(v)).join(' ');
}