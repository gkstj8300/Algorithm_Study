// const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => data.replace('\r',''));
let stack = [];
let result = [];
a.forEach((data) => {
    [b, c] = data.split(' ');
    switch(b){
        case("1"): {
            stack.push(Number(c));
            break;  
        }      
        case("2"): {
            if(stack.length > 0){
                result.push(stack.pop());
            }else{
                result.push(-1);
            }
            break;  
        }     
        case("3"): {
            result.push(stack.length);
            break;  
        }    
        case("4"): {
            if(stack.length === 0){
                result.push(1);
            }else{
                result.push(0);
            }
            break;  
        }     
        case("5"): {
            if(stack.length > 0){
                result.push(stack[stack.length-1]);
            }else{
                result.push(-1);
            }
            break;
        }
        default: {
            break;
        }
    }
});
console.log(result.join('\n'));