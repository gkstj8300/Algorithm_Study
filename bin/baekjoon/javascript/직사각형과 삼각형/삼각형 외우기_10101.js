// const [a, b, c] = require('fs').readFileSync("input.txt").toString().trim().split("\n").map(Number);
const [a, b, c] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let result = solution(a, b, c);
console.log(result);

function solution(a, b, c) {
    let arr = [a,b,c];
    let compare = arr.filter((data, idx) => arr.indexOf(data) === idx).length;
    
    if(a == 60 && b == 60 && c == 60){
        return 'Equilateral';
    }else if((a+b+c) == 180 && compare == 2){
        return 'Isosceles';
    }else if((a+b+c) == 180 && compare == 3){
        return 'Scalene';
    }else if((a+b+c) !== 180){
        return 'Error';
    }
}