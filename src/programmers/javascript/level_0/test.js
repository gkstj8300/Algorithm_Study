const fs = require('fs');
const input = fs.readFileSync('c:/Users/user/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().split(' ');
const input2 = fs.readFileSync('c:/Users/user/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().trim(' ');

let str = "";
const num = Number(input[1]);
for(let i = 0; i < num; i++){
    str += input[0];
};
console.log(str);


// * 문제 설명
// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

// * 제한사항
// 1 ≤ str의 길이 ≤ 10
// 1 ≤ n ≤ 5

// * 입출력 예
// 입력 #1
// string 5
// 출력 #1
// stringstringstringstringstring