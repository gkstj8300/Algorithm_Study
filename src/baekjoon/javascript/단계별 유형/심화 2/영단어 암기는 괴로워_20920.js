const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a = n.map((data) => data.replace('\r',''));
let [, m] = p.split(' ').map(Number);

let resultArr = a.filter((data) => {
    if(data.length >= m){
        return data;
    }
}).sort().sort((a,b) => b.length - a.length);

let resultMap = new Map();
resultArr.forEach((data) => {
    if(resultMap.has(data)){
        resultMap.set(data, resultMap.get(data) + 1);
    } else {
        resultMap.set(data, 1)
    }
})

let result = [];
[...resultMap].sort((a,b) => b[1]-a[1]).forEach((data) => {
    result.push(data[0]);
})