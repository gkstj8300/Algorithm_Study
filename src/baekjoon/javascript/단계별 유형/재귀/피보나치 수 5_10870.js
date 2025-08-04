const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
function solution(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    } 
    else {
        return solution(n-1) + solution(n-2);
    }
}
console.log(solution(n));