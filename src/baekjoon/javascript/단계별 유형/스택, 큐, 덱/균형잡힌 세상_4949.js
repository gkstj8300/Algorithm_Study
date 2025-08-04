const [...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => data.replace('\r',''));
let result = [];
a.forEach((data) => {
    let stack = [];
    let check = 0;
    if(data == "."){
        return;
    }
    for(let i = 0; i < data.length; i++) {
        if(data[i] === '(' || data[i] === '[') {
            stack.push(data[i]);
        } else if(data[i] === ')') {
            if(stack[stack.length-1] === '(') {
                stack.pop();
            } else {
                check = 1;
                break;
            }
        } else if(data[i] === ']') {
            if(stack[stack.length-1] === '[') {
                stack.pop();
            } else {
                check = 1;
                break;
            }            
        } else if(data[i] === "."){
            break;
        }
    }
    if(stack.length !== 0 || check === 1){
        result.push('no')
    } else {
        result.push('yes');
    }
});
console.log(result.join('\n'));