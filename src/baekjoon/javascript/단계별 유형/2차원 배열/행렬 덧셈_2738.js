var fs = require('fs');
// const [a,...b] = fs.readFileSync("input.txt").toString().trim().split("\n");
const [a,...b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(a,[...b]);
console.log(result);

function solution(a,b) {
    let n = a.split(' ').map(Number)[0];
    let aArr = [];
    let bArr = [];
    let count = 1;
    b.map((data) => {
        if(count <= n){
            aArr.push(data.split(' ').map((item) => Number(item)));
            count++;
        } else if(count > n) {
            bArr.push(data.split(' ').map((item) => Number(item)));
            count++;
        }
    })
    let result = '';
    aArr.forEach((data, i) => {
        bArr.forEach((item, j) => {
            result += `${aArr[i][j]+bArr[i][j]} `;
        })
        result += "\n";
    })

    return result;
}