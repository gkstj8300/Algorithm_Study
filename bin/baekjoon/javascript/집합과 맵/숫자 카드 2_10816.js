// const [a, b, c, d] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b, c, d] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = b.split(' ').map(Number);
let d_data = d.split(' ').map(Number);
let resultMap = new Map();
let result = [];
b_data.forEach((data) => {
    if(resultMap.has(data)){
        resultMap.set(data, resultMap.get(data)+1)
    } else {
        resultMap.set(data, 1);
    }
});
d_data.forEach((data) => {
    if(resultMap.has(data)){
        result.push(resultMap.get(data));
    } else {
        result.push(0);
    }
})
console.log(result.join(' '));