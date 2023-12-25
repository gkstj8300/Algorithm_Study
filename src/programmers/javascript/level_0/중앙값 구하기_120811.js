console.log( solution([1, 2, 7, 10, 11]) );

function solution(array) {
    return array.sort((a, b) => a - b)[Math.round(array.length/2)-1];
}
