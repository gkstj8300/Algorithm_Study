const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b, c] = i1.split(' ').map(BigInt);

const solution = (b) => {
    if(b === 1n){
        return a % c;
    }
    let data = solution(b/2n) % c;

    if(b % 2n) {
        return (data * data * (a % c)) % c;
    }

    return (data * data) % c;
}

console.log(Number(solution(b)));