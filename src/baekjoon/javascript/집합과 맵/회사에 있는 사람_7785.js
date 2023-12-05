// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = b.map((data) => data.replace('\r','').split(' '));
let b_map = new Map(b_data.map((data) => [data[0], data[1]]))

let result = [];

for(let val of b_map.keys()){
    if(b_map.get(val) !== "leave"){
        result.push(val);
    }
}
console.log(result.sort().reverse().join('\n'));