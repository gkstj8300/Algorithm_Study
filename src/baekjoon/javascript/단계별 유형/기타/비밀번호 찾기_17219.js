const [p, ...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = p.split(' ').map(Number);
const a = i1.slice(0,i1.length-m).map((data) => data.replace('\r','').split(' '));
const b = i1.slice(i1.length-m,i1.length).map((data) => data.replace('\r',''));
const resultMap = new Map();
const result = [];
for(let i = 0; i < a.length; i++){
    resultMap.set(a[i][0],a[i][1]);
}
for(let j = 0; j < m; j++){
    result.push(resultMap.get(b[j]));
}

console.log(result.join('\n'));