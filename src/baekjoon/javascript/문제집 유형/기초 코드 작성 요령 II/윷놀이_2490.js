const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  const PLAY = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
  }

  for (let line of input) {
    const arr = line.split(' ').map(Number);
    const zeroCount = arr.filter(n => n === 0).length;
    console.log(zeroCount === 0 ? 'E' : PLAY[zeroCount]);
  }
}