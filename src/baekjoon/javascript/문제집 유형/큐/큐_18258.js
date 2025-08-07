const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const arr = input.slice(1);
  const queue = [];
  let head = 0;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const [cmd, num] = arr[i].split(' ');

    switch (cmd) {
      case 'push':
        queue.push(num);
        break;
      case 'pop':
        if (queue.length - head === 0) {
          result.push(-1);
        } else {
          result.push(queue[head]);
          head++;
        }
        break;
      case 'size':
        result.push(queue.length - head);
        break;
      case 'empty':
        result.push(queue.length - head === 0 ? 1 : 0);
        break;
      case 'front':
        result.push(queue.length - head === 0 ? -1 : queue[head]);
        break;
      case 'back':
        result.push(queue.length - head === 0 ? -1 : queue[queue.length - 1]);
        break;
    }
  }

  console.log(result.join('\n'));
}
