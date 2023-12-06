const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a_data = a.split('');
let result = new Set();

for(let i = 1; i <= a_data.length; i++){
    for(let j = 0; j + i <= a_data.length; j++){
        result.add(a.substring(j, j + i));
        test.set(a.substring(j, j + i));
    }
}

console.log(result.size);