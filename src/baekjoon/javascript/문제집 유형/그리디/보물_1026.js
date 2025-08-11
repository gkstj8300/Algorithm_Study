const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const n = +input[0];
  const arr1 = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const arr2 = input[2].split(' ').map(Number).sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += (arr1[i] * arr2[i]);
  }

  console.log(sum)
}
