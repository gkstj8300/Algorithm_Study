const [...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const input = i1.map((data) => data.replace('\r',''));
const colorMap = new Map([
   ['black', 0],
   ['brown', 1],
   ['red', 2],
   ['orange', 3],
   ['yellow', 4],
   ['green', 5],
   ['blue', 6],
   ['violet', 7],
   ['grey', 8],
   ['white', 9],
]);
const resultArr = [];
for(let i = 0 ; i < input.length; i++) {
   resultArr.push(colorMap.get(input[i]));
}
const result = ((resultArr[0]*10) + resultArr[1]) * 10**resultArr[2];
console.log(result);