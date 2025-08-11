const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  let [_, money] = input[0].trim().split(' ');
  const arr = input.slice(1).map(Number);

  let count = 0;
  let i = arr.length - 1;

  while (money !== 0) {
    if (money - arr[i] >= 0) {
      money -= arr[i];
      count++;
    } else {
      i--;
    }
  }
  console.log(count);
}
