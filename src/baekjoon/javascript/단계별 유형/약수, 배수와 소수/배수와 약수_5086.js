// const [...arr] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(arr);
// console.log(result);

function solution(arr) {
    let result = [];
    arr.map((data) => {
        let dataArr = data.replace(/\r/g,'').split(' ').map(Number);
        let test = [];
        for(let i = 0; i <= dataArr[1]; i++){
            if(dataArr[1] % i === 0){
                test.push(i);
            }
        }
        if(test.includes(dataArr[0])) {
            result.push('factor');
        }else if(dataArr[0] % dataArr[1] == 0){
            result.push('multiple');
        } else if(!test.includes(dataArr[0]) &&  !dataArr[0] % dataArr[1] == 0) {
            result.push('neither');
        }
    })
    console.log(result.join(' '));
}  