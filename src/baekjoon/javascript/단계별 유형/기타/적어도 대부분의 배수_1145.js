const [t] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [t] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = t.split(' ').map(Number);

let count = 1;

while(true){
    let n = 0;
    a.forEach((data) => {
        if (count % data === 0) {
            n++;
        }
    })
    if (n >= 3) {
        break;
    }
    count++;
}
console.log(count);