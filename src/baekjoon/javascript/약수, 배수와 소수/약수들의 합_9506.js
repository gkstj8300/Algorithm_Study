// const [...arr] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(arr);
// console.log(result);

function solution(arr) {
    let result = [];
    arr.pop();
    let aArr = [];
    arr.map((data, i) => {
        aArr[i] = [];
        for(let j = 0; j <= Number(data); j++){
            if(Number(data) % j === 0 && Number(data) !== j){
                aArr[i].push(j);
            }
        }
    })
    aArr.map((data, idx) => {
        let sum = data.reduce((acc, data) => { return acc += data });
        if(sum === Number(arr[idx])){
            result.push(`${arr[idx].replace(/\r/g,'')} = ${data.join(' + ')}`);
        } else {
            result.push(`${arr[idx].replace(/\r/g,'')} is NOT perfect.`);
        }
    })
    console.log(result.join('\n'));
}  