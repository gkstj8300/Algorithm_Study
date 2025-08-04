// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const input = b.map((data) => data.split(' ').map((data2) => parseInt(data2)));
let result = input.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
}).reduce((acc, data) => {
    acc += `\n${data[0]} ${data[1]}`;
return acc;
});
console.log(result);