const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let result = solution(b);
console.log(result);

function solution(b) {
    let arr = Array.from(Array(100), () => Array(100).fill(0));
    let count = 0;
    b.map((data) => {
        data = data.replace(`\r`,'').split(' ').map(Number);
        let x = data[0];
        let y = data[1];
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(arr[x + i][y + j] === 0){
                    arr[x + i][y + j] = 1;
                    count++;
                }
            }
        }
    });
    return count;
}