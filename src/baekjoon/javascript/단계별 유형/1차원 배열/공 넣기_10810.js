const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result)

function solution(input) {
  let arr = input;
  const [n, m] = arr[0].split(' ').map(Number);
  let cart = new Array(n).fill(0);
  
  for(let i = 1; i < m+1; i++) {
    const [a, b, c] = arr[i].split(' ').map(Number);
    cart.fill(c, a-1, b);
  }

  return cart.join(' ');
}