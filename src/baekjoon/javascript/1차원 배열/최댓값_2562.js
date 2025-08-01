const fs = require("fs");
const a = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(a);
console.log(result)

function solution(a) {
  let arr = a.map(Number);
  let max = 0;
  let index = 0;

  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }

  return `${max} ${index+1}`;
}