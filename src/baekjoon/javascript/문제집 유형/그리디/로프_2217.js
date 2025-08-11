const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const n = +input[0];
  const arr = input.slice(1).map(Number).sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(arr[i] * (n - i));
  }

  console.log(Math.max(...result));
}


/**
2
10
15
 */