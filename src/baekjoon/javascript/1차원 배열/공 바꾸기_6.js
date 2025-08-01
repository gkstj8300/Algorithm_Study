const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

function solution(input) {
  let [n, m] = input[0].split(' ').map(Number);
  let cart = Array.from({ length: n }, (_, i) => i + 1);

  for(let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    const temp = cart[a - 1];
    cart[a - 1] = cart[b - 1];
    cart[b - 1] = temp;
  }
  
  return cart.join(' ');
}