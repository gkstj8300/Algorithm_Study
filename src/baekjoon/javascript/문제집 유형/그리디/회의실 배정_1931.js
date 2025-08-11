const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const n = input[0];
  const arr = input.slice(1).map(line => {
    const [start, end] = line.split(" ").map(Number);
    return { start, end };
  });
  
  arr.sort((a, b) => {
    if (a.end === b.end) return a.start - b.start;
    return a.end - b.end;
  });

  let count = 0;
  let currentEndTime = 0;

  for (let meeting of arr) {
    if (meeting.start >= currentEndTime) {
      count++;
      currentEndTime = meeting.end;
    }
  }

  console.log(count);
}
