let result = solution([149, 180, 192, 170], 167);
console.log(result)

function solution(array, height) {
    return array.sort((a,b) => a-b).filter((data) => data > height).length;
}