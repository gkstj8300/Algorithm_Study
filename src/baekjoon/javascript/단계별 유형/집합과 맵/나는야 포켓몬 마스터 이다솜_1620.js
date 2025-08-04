const [l1, ...l2] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [l1, ...l2] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = l1.split(' ').map(Number);
let arr = l2.map((data) => data.replace('\r','')).splice(0, n);
let arr2 = l2.map((data) => data.replace('\r','')).splice(n, n+m);
let resultMap = new Map();
let resultMap2 = new Map();
for(let i = 0; i < arr.length; i++){
    resultMap.set(i+1, arr[i]);
    resultMap2.set(arr[i], i+1);
}

let result = [];
arr2.forEach((data) => {
    if(isNaN(data)) { // 문자
        result.push(resultMap2.get(data));
    } else if(!isNaN(data)) { // 숫자
        result.push(resultMap.get(+data));
    }
});
console.log(result.join(' '));