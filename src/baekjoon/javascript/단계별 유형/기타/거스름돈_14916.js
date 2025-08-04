const [i1] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [i1] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(i1);

function solution(n) {
	let result = 0;
	while (n > 0) {
        if (n === 1 || n === 3) {
            return -1;
        }
		if (n % 2 === 1 || n % 5 === 0) {
			result += 1;
			n -= 5;
		} else if (n % 2 === 0) {
			result += 1;
			n -= 2;
		}
	}
	return result;
}

console.log(solution(n));