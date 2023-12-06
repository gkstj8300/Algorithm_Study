// const [a,b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a,b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a_data = a.split(' ').map(Number);
let b_data = b.split(' ').map(Number).reverse();

let maxNum = a_data[1];

let result = 0;

b_data.map((data, idx) => {
    for(let i = 0; i < b_data.length; i++){
        for(let j = 0; j < b_data.length; j++){
            let compareNum = [idx, i, j].filter((item, compareIdx) => [idx, i, j].indexOf(item) == compareIdx).length;
            let sum = [b_data[idx], b_data[i], b_data[j]].reduce((acc, data2) => acc += data2);
            if( compareNum === 3 && sum > result && sum <= maxNum){
                result = sum;
            }
        }
    }
});
console.log(result);