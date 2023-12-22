console.log( solution("1 2 3 4") );

function solution(s) {
    let result = [];
    result.push(Math.min(...s.split(' ')), Math.max(...s.split(' ')))
    return String(result.join(' '));
}