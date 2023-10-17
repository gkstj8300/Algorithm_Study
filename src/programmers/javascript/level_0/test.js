const fs = require('fs');
const input = fs.readFileSync('C:/Users/gkstj/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().split(' ');
// const input2 = fs.readFileSync('/src/programmers/javascript/level_0/input.txt').toString().trim(' ');

let num1 = input[0];
let num2 = input[1];
console.log(Number(num1)+" + "+Number(num2)+" = "+(Number(num1)+Number(num2)));


/*
      덧셈식 출력하기

      * 문제 설명
      두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
      a + b = c

      * 제한사항
      1 ≤ a, b ≤ 100

      * 입출력 예
      입력 #1
      4 5
      출력 #1
      4 + 5 = 9
*/