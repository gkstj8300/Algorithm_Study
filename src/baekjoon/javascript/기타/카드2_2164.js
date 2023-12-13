const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n").map(Number);
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let card = Array.from({ length: n }, (v, i) => (v = i + 1));
let count = 0;

while(count !== card.length - 1){
    if(count % 2 === 0){
        count++;
    } else {
        card.push(card[count++]);
    }
}
console.log(card[count]);