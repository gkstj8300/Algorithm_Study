const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let inputArr = input.slice(1);
  let arr = [];
  let result = [];
  
  for (let i = 0; i < inputArr.length; i++) {
    const [command, n] = inputArr[i].trim().split(' ');

    switch(command) {
      case 'push':
        arr.push(n);
        break;
      case 'pop':
        arr.length === 0 ? result.push('-1') : result.push(arr.pop());
        break;
      case 'size':
        result.push(String(arr.length));
        break;
      case 'empty':
        arr.length === 0 ? result.push('1') : result.push('0');
        break;
      case 'top':
        arr.length === 0 ? result.push('-1') : result.push(arr[arr.length - 1]);
        break;
    }
  }

  return result.join('\n');
}
