var fs = require('fs');
// const [...a] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [...a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(raws);

function solution(raws) {
    let max = 0;
    let index = [];
    a.map((data, i) => {
        data.split(' ').map(Number).forEach((item, j) => {
            if(item > max){
                max = item;
                index = [i+1,j+1];
            }
        });
    })
    console.log(max);
    console.log(index.join(' '));
}