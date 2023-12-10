const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => Number(data));

let result = [];
result.push(Math.round(a.reduce((acc, data) => {return acc += data})/a.length));
result.push(a.sort((a, b) => a - b)[Math.floor(a.length/2)]);
let resultMap = new Map();
a.forEach((data) => {
    if(resultMap.has(data)){
        resultMap.set(data, resultMap.get(data) + 1);
    } else {
        resultMap.set(data, 1);
    }
}) 
let maxNum = Math.max(...Array.from(resultMap.values()));
let maxArr = [];
for(let [key, value] of resultMap){
    if(value === maxNum){
        maxArr.push(key);
    }
}
result.push(maxArr.length === 1 ? maxArr[0] : maxArr[1]);
result.push(Math.max(...a) - Math.min(...a));

console.log(result.join('\n'));