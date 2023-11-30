// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(a);
console.log(result);

function solution(a) {
    let result = [];
    a.pop();
    a.map((data) => {
        let mainArr = data.replace('\r','').split(' ').map(Number);
        mainArr.sort((a, b) => a - b);
        if(mainArr[0] + mainArr[1] <= mainArr[2]){
            result.push('Invalid');
        } else {
            const set = new Set(mainArr);  
            if(set.size === 1) {
              result.push('Equilateral');
            } else if(set.size === 2) {
              result.push('Isosceles');
            } else {
              result.push('Scalene');
            } 
        }
    })
    return result.join(' ');
}