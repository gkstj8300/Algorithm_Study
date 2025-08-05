const fs = require("fs");
const [_, input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let arr = input.split(" ").map(Number);
  let Y = 0;
  let M = 0;

  for (let num of arr) {
    Y += Math.floor(num / 30 + 1) * 10;
    M += Math.floor(num / 60 + 1) * 15;
  }

  if (Y < M) {
    return `Y ${Y}`;
  } else if (Y > M) {
    return `M ${M}`;
  } else {
    return `Y M ${Y}`;
  }
}