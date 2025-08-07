const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

// 5
// [ 6, 9, 5, 7, 4 ]

function solution(input) {
  const n = +input[0];
  const heights = input[1].split(' ').map(Number);
  
  const stack = [];
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const height = heights[i];

    while (stack.length > 0 && stack[stack.length - 1][1] < height) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1][0] + 1;
    }

    stack.push([i, height]);
  }

  console.log(result.join(' '));
}


function solution2(input) {
  const n = +input[0];
  const arr = input[1].split(' ').map(Number);
  
  const result = [0];

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] < arr[j]) {
      if (i === 0) {
        j++;
        i++;
        result.push(0);
      } else {
        i--;
      }
    } else if (arr[i] > arr[j]) {
      result.push(i + 1);
      i++;
      j++;
      if (j - i !== 1) {
        i = j - 1;
      }
    }
  }

  console.log(result.join(' '));
}
