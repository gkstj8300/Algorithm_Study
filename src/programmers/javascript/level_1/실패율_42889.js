let result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]
console.log(result);

function solution(N, stages) {
    let resultMap = new Map();
    for(let i = 1; i <= N; i++) {
        let checkCount = stages.filter((data) => data >= i).length;
        let flag = stages.filter((data) => data === i).length;
        resultMap.set(i,flag/checkCount);
    }
    let result = [...resultMap].sort((a, b) => b[1] - a[1]);
    result = result.map((data) => data[0]);
    return result;
}