const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  const initialStr = input[0].trim();
  const M = parseInt(input[1]);
  const commands = input.slice(2);

  const left = initialStr.split('');
  const right = [];

  for (let i = 0; i < M; i++) {
    const [cmd, arg] = commands[i].trim().split(' ');

    switch (cmd) {
      case 'L':
        if (left.length > 0) right.push(left.pop());
        break;
      case 'D':
        if (right.length > 0) left.push(right.pop());
        break;
      case 'B':
        if (left.length > 0) left.pop();
        break;
      case 'P':
        left.push(arg);
        break;
    }
  }

  return left.concat(right.reverse()).join('');
}
