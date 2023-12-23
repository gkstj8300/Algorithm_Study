console.log( solution(24, 24) );

function solution(brown, yellow) {
    let sum = brown + yellow;
    let b = (brown+4) / 2;
    let x = (b + Math.sqrt(b ** 2 - 4 * sum)) / 2;
    let y = (b - Math.sqrt(b ** 2 - 4 * sum)) / 2;
    return [x, y]
}