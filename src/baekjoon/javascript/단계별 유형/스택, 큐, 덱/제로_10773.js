const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => Number(data.replace('\r','')));
let stack = [];

for(let i = 0; i < a.length; i++){
    if(a[i] === 0) {
        stack.pop();
    } else {
        stack.push(a[i]);
    }
}

let result = 0;
stack.forEach((data) => {
    result += data;
});

console.log(result);