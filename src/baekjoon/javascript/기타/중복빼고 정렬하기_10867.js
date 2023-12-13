const [p, i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const resultSet = new Set();
i1.split(' ').map((data) => { resultSet.add(parseInt(data)) });
console.log([...resultSet].sort((a, b) => a - b).join(' '));