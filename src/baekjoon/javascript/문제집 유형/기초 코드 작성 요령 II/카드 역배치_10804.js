const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let data = Array.from({ length: 20 }, (_, i) => i + 1);

  for (let str of input) {
    const [a, b] = str.split(' ').map(Number);
    const card = data.slice(a - 1, b).reverse();
    
    for (let i = 0; i < card.length; i++) {
      data[i + (a - 1)] = card[i];
    }
  }

  return data.join(' ');
}