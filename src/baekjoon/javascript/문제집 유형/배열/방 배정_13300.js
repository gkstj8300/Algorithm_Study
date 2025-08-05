const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/baekjoon/javascript/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = solution(input);
console.log(result);

/**
16 (학생수) / 최대 인원 수
여학생 0 || 남학생 1 / 학년
*/
function solution(input) {

  const map = new Map();
  const [n, m] = input[0].split(' ').map(Number);

  for (let i = 1; i < input.length; i++) {
    const [gender, year] = input[i].split(' ').map(Number);
    const data = `${year}/${gender}`;
    map.set(data, (map.get(data) || 0) + 1);
  }

  const students = Array.from(map.values());
  let sum = 0;

  for (let student of students) {
    sum += Math.ceil(student / m);
  }

  return sum;
}