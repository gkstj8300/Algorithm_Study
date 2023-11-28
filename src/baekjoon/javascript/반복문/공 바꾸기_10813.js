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
    let arr = [];
    for(let i = 1; i <= Number(a.split(' ')[0]); i++){
        arr.push(i);
    }
    let str = '';
    b.map((data) => {
        let num1 = arr[Number(data[0])-1];
        let num2 = arr[Number(data[1])-1];
        arr[data[0]-1] = num2;
        arr[data[1]-1] = num1;
    })
    return arr.map(Number).join(',').replaceAll(',',' ');
}