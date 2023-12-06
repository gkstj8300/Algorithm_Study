/*
문자와 문자열

문제
단어 
$S$와 정수 
$i$가 주어졌을 때, 
$S$의 
$i$번째 글자를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 
$S$가 주어진다. 단어의 길이는 최대 
$1\,000$이다.

둘째 줄에 정수 
$i$가 주어진다. (
$1 \le i \le \left|S\right|$)

출력
 
$S$의 
$i$번째 글자를 출력한다.

예제 입력 1 
Sprout
3

예제 출력 1 
r
*/

var fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = parseInt(input[1]);

let result = solution(a,b);
console.log(result)

function solution(a,b) {
    return a.split('')[b-1]
}