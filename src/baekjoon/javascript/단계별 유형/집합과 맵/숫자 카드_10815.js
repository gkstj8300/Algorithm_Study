// const [a, b, c, d] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b, c, d] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = new Set(b.split(' ').map(Number));
let d_data = d.split(' ').map(Number);
let result = d_data.map((data) => {
    if(b_data.has(data)){
        return 1
    }
    return 0;
})
console.log(result.join(' '));