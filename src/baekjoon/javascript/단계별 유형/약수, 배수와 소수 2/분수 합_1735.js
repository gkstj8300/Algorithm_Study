// const [...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a = n[0].replace('\r','').split(' ').map(Number);
let b = n[1].replace('\r','').split(' ').map(Number);

let a1 = a[0];
let a2 = a[1];
let b1 = b[0];
let b2 = b[1];

let data1 = 0;
let data2 = 0;

data1 = a1 * b2 + b1 * a2;
data2 = a2 * b2;

let result1 = data1 / gdc(data1, data2);
let result2 = data2 / gdc(data1, data2);

console.log(result1+" "+result2);

function gdc (a, b){
    if(b === 0){
        return a
    }
    return gdc(b, a % b);
}