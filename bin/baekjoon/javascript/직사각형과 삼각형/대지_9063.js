// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = solution(b);
console.log(result);

function solution(b) {
    let result = [];
    let x = [];
    let y = [];
    b.map((data) => {
        let mainData = data.replace('\r','').split(' ').map(Number);
        x.push(mainData[0]);
        y.push(mainData[1]);
    });
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
