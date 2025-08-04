// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(b);
console.log(result);

function solution(b) {
    let result = [];
    let numArr = b[0].split(' ');
    numArr.map((data, idx) => {
        result[idx] = [];
        for(let i = 1; i <= data; i++){
            if(data % i == 0){
                result[idx].push(i);
            }
        }
    })
    return result.filter((data) =>  data.length == 2).length;
}