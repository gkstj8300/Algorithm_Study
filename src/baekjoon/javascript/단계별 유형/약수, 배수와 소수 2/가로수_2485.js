const [n, ...a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n, ...a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let a_data = a.map((data) => Number(data.replace('\r','')));

let interval = [];
for(let i = 0; i < a_data.length - 1; i++){
    interval.push(a_data[i+1]-a_data[i]);
}

let maxData = interval[0];
for(let j = 0; j < a_data.length - 1; j++){
    maxData = getGcd(maxData, interval[j]);
}

function getGcd(a, b) {
    if (b === 0){
        return a;
    }  
    return getGcd(b, a % b)  
}

let result = 0;
interval.forEach((data, idx) => {
    if(data !== maxData){
        result += data / maxData - 1;
    }
})
console.log(result);