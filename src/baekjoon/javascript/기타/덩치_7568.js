const [p, ...i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(p);
let input = i1.map((data) => data.replace('\r','').split(' ').map(Number));
let result = [];
for(let i = 0; i < n; i++){
    let count = 1;
    for(let j = 0; j < n; j++){
        if(i !== j){
            if(input[i][0] < input[j][0] && input[i][1] < input[j][1]){
                count++;
            }
        }
    }
    result.push(count);
}
console.log(result.join(' '));

// let main = i1.map((data) => data.replace('\r',''));
// let input = i1.map((data) => data.replace('\r','').split(' ').map(Number)).sort((a, b) => b[0] - a[0]);
// input.push([0,0]);
// let resultMap = new Map();
// let rank = 1;
// let count = 1;
// let result = [];
// for(let i = 0; i < input.length-1; i++){
//     if(input[i][1] > input[i+1][1]){
//         resultMap.set(input[i][0]+" "+input[i][1], rank);
//         rank += count;
//     } else {
//         resultMap.set(input[i][0]+" "+input[i][1], rank);
//         count++;
//     }
// }
// main.forEach((data) => {
//     result.push(resultMap.get(data));
// })
// console.log(result.join(' '));