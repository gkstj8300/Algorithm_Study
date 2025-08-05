const fs = require("fs");
const [a, b] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(a, b);
console.log(result);

function solution(a, b) {
  let sortA = a.trim().split('').sort();
  let sortB = b.trim().split('').sort();

  let i = 0, j = 0;
  let count = 0;

  while (i < sortA.length && j < sortB.length) {
    if (sortA[i] === sortB[j]) {
      i++;
      j++;
    } else if (sortA[i] < sortB[j]) {
      count++;
      i++;
    } else {
      count++;
      j++;
    }
  }

  count += sortA.length - i;
  count += sortB.length - j;

  return count;
}