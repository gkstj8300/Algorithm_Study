const [p, ...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let input = a.map((data) => Number(data.replace('\n','')))
let maxNum = Math.max(...input);
let result = [];
let copareArr = new Array(maxNum).fill(0);

// 에라토스테네스의 체 방식 소수 찾기
for(let i = 2; i <= (maxNum / 2); i++){
    if(copareArr[i] == 0){
        for(let j = 2; j <= (maxNum / i); j++){
            copareArr[i * j] = 1;
        }
    }
}

input.map((data) => {
    let count = 0;
    for(let i = 2; i <= (data / 2); i++){
        if(copareArr[i] == 0 && copareArr[data - i] == 0){
            count++
        }
    }
    result.push(count);
})

console.log(result.join('\n'));