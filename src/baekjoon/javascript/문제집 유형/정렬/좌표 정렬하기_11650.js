const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const arr = input.slice(1);
  const result = arr.sort((a, b) => {
    let sortA = a.split(' ');
    let sortB = b.split(' ');
    if (Number(sortA[0]) !== Number(sortB[0])) {
      return Number(sortA[0]) - Number(sortB[0])
    }
    return Number(sortA[1]) - Number(sortB[1])
  });
  console.log(result.join('\n'));
}
