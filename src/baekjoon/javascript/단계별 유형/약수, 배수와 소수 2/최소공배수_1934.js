const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let b_data = b.map((data) => data.replace('\r','').split(' ').map(Number));
let resultArr = [];
b_data.map((data) => {
    let [a, b] = data;
    let minData = (a * b) / getMinData(a, b);
    resultArr.push(minData);
})
function getMinData(a, b){
    let num = 0;
    while(b != 0){
        num = a;
        a = b;
        b = num % b;
    }
    return a;
}
console.log(resultArr.join('\n').trim());