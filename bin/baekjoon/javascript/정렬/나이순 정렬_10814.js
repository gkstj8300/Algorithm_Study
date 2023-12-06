const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let result = '';
b.map((data) => data.replace('\r','').split(' '))
    .sort((a,b) => a[0] - b[0])
    .forEach((data) => { 
        return result += `${data[0]} ${data[1]}\n` 
    });
console.log(result);