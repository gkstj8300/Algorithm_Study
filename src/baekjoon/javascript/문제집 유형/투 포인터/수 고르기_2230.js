const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const [n, m] = input[0].split(' ').map(Number)
  const arr = input.slice(1).map(Number).sort((a, b) => a - b);

  let i = 0, j = 1;
  let min = Infinity;

  while (j < n) {
    const diff = arr[j] - arr[i];

    if (diff < m) {
      j++;
    } else {
      min = Math.min(min, diff);
      i++;
    }

    if (i > j) j = i;
  }

  console.log(min)
}
