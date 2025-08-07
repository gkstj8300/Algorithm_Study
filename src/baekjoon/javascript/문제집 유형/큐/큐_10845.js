const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const n = +input[0];
  const arr = input.slice(1);
  
  const queue = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const [str, num] = arr[i].split(' ');
    
    switch (str.trim()) {
      case 'push':
        queue.push(Number(num));
        break;
      case 'pop':
        result.push(queue.length === 0 ? -1 : queue.shift());
        break;
      case 'size':
        result.push(queue.length);
        break;
      case 'empty':
        result.push(queue.length === 0 ? 1 : 0);
        break;
      case 'front':
        result.push(queue.length === 0 ? -1 : queue[0]);
        break;
      case 'back':
        result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
        break;
    }
  }

  console.log(result.join('\n'));
}
