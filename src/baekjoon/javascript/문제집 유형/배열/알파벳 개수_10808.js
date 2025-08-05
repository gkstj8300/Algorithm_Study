const fs = require("fs");
const [input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let arr = Array(26).fill(0);

  for (let char of input) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    arr[index]++;
  }

  return arr.join(' ');
}