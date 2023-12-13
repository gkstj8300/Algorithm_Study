const [...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const input = i1.map((data) => Number(data.replace('\n','')));
let rank = i1.map((data) => Number(data.replace('\n',''))).sort((a, b) => b - a).slice(0,5);
let result = [];
for(let i = 0; i < rank.length; i++){
    result.push(input.indexOf(rank[i])+1);
}
let sum = rank.reduce((acc, data) => acc += data);
console.log(sum);
console.log(result.sort((a,b) => a-b).join(' '));