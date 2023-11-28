var fs = require('fs');
// const [a, ...b] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arrData = [];
[...b].forEach((data) => {
    arrData.push(data.split(' '));
});

let result = solution(a, arrData);
console.log(result);

function solution(a, b) {
    let arr = new Array(Number(a.split(' ')[0])).fill(0);
    let str = '';
    b.map((data) => {
        for(let i = data[0]-1; i <= data[1]-1; i++){
            arr[i] = data[2];
        }
    })
    return arr.map(Number).join(',').replaceAll(',',' ');
}