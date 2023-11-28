var fs = require('fs');
// const [a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a);
console.log(result);

function solution(a) {
    let arr = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
    let arr2 = [];
    arr.filter((data,idx) => {
        if(a.includes(data)){
            arr2.push(a.indexOf(data));
        }else{
            arr2.push(-1);
        }
    })
    return arr2.join(' ');
}