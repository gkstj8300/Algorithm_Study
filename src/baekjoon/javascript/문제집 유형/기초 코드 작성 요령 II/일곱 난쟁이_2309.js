const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n").map(Number);

let result = solution(input);
console.log(result);

function solution(heights) {
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = 1; j < heights.length; j++) {
      const others = heights.filter((_, idx) => idx !== i && idx !== j);
      const sum = others.reduce((a, v) => a + v, 0);

      if (sum === 100) {
        return others.sort((a, b) => a - b).join('\n');
      }
    }
  }
}