const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);

function solution(input) {
  const n = +input[0];
  const sequence = input.slice(1).map(Number);
  const stack = [];
  const result = [];
  let current = 1;
  let isPossible = true;

  for (let i = 0; i < n; i++) {
    const target = sequence[i];

    while (current <= target) {
      stack.push(current++);
      result.push('+');
    }

    if (stack[stack.length - 1] === target) {
      stack.pop();
      result.push('-');
    } else {
      isPossible = false;
      break;
    }
  }

  if (!isPossible) {
    console.log("NO");
  } else {
    console.log(result.join('\n'));
  }
}
