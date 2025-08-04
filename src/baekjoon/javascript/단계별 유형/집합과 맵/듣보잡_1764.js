// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = b.map((data) => data.replace('\r',''));
let b_map = new Map();
let result = [];
let count = 0;
b_data.forEach((data) => {
    if(b_map.has(data)){
        b_map.set(data, b_map.get(data) + 1)
    } else {
        b_map.set(data, 1)
    }
});

for(let [key, value] of b_map){
    if(value >= 2){
        result.push(key);
        count++;
    }
}
result.sort();
console.log(count);
console.log(result.join('\n'));