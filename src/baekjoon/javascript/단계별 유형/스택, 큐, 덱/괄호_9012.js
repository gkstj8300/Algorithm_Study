const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a = n.map((data) => data.replace('\r',''));

a.map((data, idx) => {
    let stack = [];
    let result = 'YES';
    data.split('').forEach((item) => {
        if(item === '('){
            stack.push(item);
        } else if (!stack.pop()) {
            result = 'NO';
        }
    });
    if(stack.length !== 0){
        result = 'NO';
    }
    console.log(result);    
});