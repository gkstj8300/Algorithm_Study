const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = i1.split(' ').map(Number);
let seq = [];
let visited = [...Array(n+1)].fill(false);

let result = "";
function solution(num) {
    if(num === m){
        result += `${seq.join(' ')}\n`
    }
    for(let i = 1; i <= n; i++){
        if(visited[i] == false){
            visited[i] = true;
            seq.push(i);
            solution(num + 1);
            seq.pop();
            visited[i] = false;
        }
    }
}
solution(0);
console.log(result.trim());