// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = b[0].split(' ');
let b_arr = b_data.map(Number).sort((a,b) => a-b);
let b_compare = [...new Set(b_arr)];
let result = new Map();
b_compare.forEach((data, idx) => {
    result.set(data, idx);
});
let str = '';
b_data.forEach((data, idx) => 
    str += `${result.get(Number(data))} `
);
console.log(str);