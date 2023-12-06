var fs = require('fs');
// const [a, ...b] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution([...b]);
console.log(result);

function solution(b) {
    let arr = [];
    b.forEach((data) => {
        arr.push(data.replace(/\r/g,'').split('')[0]+data.replace(/\r/g,'').split('')[data.replace(/\r/g,'').length-1]);
    })
    return arr.join(' ');
}