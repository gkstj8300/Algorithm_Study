var fs = require('fs');
// const a = fs.readFileSync("input.txt").toString().trim().split("\n");
const a = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a);
console.log(result);

function solution(a) {
    let data = '';
    let length = Math.max(...a.map(item => item.length));
    for(let i = 0; i<length; i++){
        for(let j = 0; j<a.length; j++){
            data += a[j][i] || '';
        }
    }
    return data;
}