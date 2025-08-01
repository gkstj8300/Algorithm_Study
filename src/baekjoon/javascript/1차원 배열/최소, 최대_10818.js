const fs = require("fs");
const [a, b] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(a, b);
console.log(result)

function solution(a, b) {
  let sortArr = b.split(' ').map(Number).sort((a, b) => a- b);
  return `${sortArr[0]} ${sortArr[sortArr.length-1]}`;
}