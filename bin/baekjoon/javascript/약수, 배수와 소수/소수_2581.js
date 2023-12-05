// const [a, b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(Number(a),Number(b));
console.log(result);

function solution(a,b) {
    let arr = [];
    let result = [];
    for(let i = a; i <= b; i++){
        let count = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                count++
            }
        }
        if(count == 2){
            arr.push(i);
        }
    }
    if(arr.length == 0){
        return -1
    } else {
        result.push(arr.reduce((arr, data) => { return arr += data }));
        result.push(Math.min(...arr));
        return result.join(' ');
    }
}