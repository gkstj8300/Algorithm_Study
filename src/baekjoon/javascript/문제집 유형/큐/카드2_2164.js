const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim();
  // .split("\n");

solution(input);

function solution(input) {
  let arr = Array.from({ length: parseInt(input) }, (_, idx) => idx + 1);
  let head = 0;

  while (arr.length - head > 1) {
    head++;
    arr.push(arr[head]);
    head++
  }
  console.log(arr[head]);
}
