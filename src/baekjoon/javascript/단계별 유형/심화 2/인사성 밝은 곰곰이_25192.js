const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => data.replace('\r',''));
let resultSet = new Set();
let count = 0;

for(let i = 0; i < a.length; i++){
    if(a[i] === 'ENTER'){
        count += resultSet.size;
        resultSet.clear();
        continue;
    }
    resultSet.add(a[i]);
    if(i === a.length - 1){
        count += resultSet.size;
    }
}

console.log(count);