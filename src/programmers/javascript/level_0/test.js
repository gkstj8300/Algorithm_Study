const fs = require('fs');
const input = fs.readFileSync('C:/Users/gkstj/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().split(' ');
// const input2 = fs.readFileSync('/src/programmers/javascript/level_0/input.txt').toString().trim(' ');

let arr = input[0].split("");
let data = "";
arr.forEach(function (str) { 
    if(str === str.toUpperCase()){
        data += str.toLowerCase();
    }else if(str === str.toLowerCase()){
        data += str.toUpperCase();
    }
});
console.log('!@#$%^&*(\\\'"<>?:;'); 
console.log('!@#$%^&*(\\\'"<>?:;');

// * 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// * 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.

// * 입출력 예
// 입력 #1
// aBcDeFg
// 출력 #1
// AbCdEfG