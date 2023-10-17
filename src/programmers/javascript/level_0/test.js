const fs = require('fs');
const input1 = fs.readFileSync('c:/Users/user/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().split(' ');
const input2 = fs.readFileSync('c:/Users/user/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().trim(' ');

console.log(`a = ${Number(input1[0])}\nb = ${Number(input1[1])}`);
console.log(Number(input1[0])+Number(input1[1]));
// console.log(input2);