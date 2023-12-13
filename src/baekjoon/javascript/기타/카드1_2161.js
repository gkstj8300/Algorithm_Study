const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n").map(Number);
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let card = Array.from({ length: n }, (v, i) => (v = i + 1));
let result = [];
while(true){
    let x = card.shift();
    result.push(x);
    if(card.length !== 0){
        card.push(card.shift());
    } else {
        break;
    }
}
console.log(result.join(' '));