// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const input = b.map((data) => data.split(' ').map((data2) => parseInt(data2)));

let result = input.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
})
let answer = '';
result.forEach((data, idx) => {
    answer += `${data[0]} ${data[1]}\n`
})
console.log(answer);