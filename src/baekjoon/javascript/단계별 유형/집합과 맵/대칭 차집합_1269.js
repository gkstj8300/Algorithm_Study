// const [a, b, c] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b, c] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = new Set(b.split(' ').map(Number));
let c_data = new Set(c.split(' ').map(Number));
let total_set = new Set((b.trim()+' '+c.trim()).split(' ').map(Number));

(b_data.length >= c_data.length ? b_data : c_data).forEach((data) => {
    if(b_data.has(data)){
        total_set.delete(data);
    }
})
console.log(total_set.size);