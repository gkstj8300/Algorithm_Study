const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
		const [i1, ...i2] = input;
		function solution(i2) {
			let answer = 0;
			const resultArr = i2.map((data) => Number(data.replace('\r',''))).sort((a,b) => b-a);
			for (let i = 0; i < i2.length; i += 1) {
				if ((i + 1) % 3 === 0) {
                    continue;
                }
				answer += resultArr[i];
			}
			return answer;
		}
		const answer = solution(i2);
		console.log(answer);
  process.exit();
});