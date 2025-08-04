// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = a.split(' ').map(Number);
let strSet = new Set(b.slice(0, n).map((data) => data.replace('\r','')));
let compareSet = b.slice(n, n+m).map((data) => data.replace('\r',''));
let count = 0;
compareSet.forEach((data) => {
    if(strSet.has(data)){
        count++;
    }
});
console.log(count);