// const [...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(a);
console.log(result);

function solution(a) {
    let x = [];
    let y = [];
    a.map((data) => {
        let item = data.replace('\r','').split(' ').map(Number);
        x.push(item[0]);
        y.push(item[1]);
    })
    let compareNum_x = x.filter((data, idx) => {
        return x.indexOf(data) != idx;
    });
    let compareNum_y = y.filter((data, idx) => {
        return y.indexOf(data) != idx;
    });
    return x.filter((data) => data != compareNum_x) + ' ' + y.filter((data) => data != compareNum_y)
}