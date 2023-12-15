let result = solution([1,3,2,5,4], 9);
console.log(result)

function solution(d, budget) {
    var count = 0;
    var sum = 0;
    d.sort((a, b) => a - b).forEach((data) => {
        count++;
        sum += data;
        if(sum > budget) {
            count--;
        }
    });
    return count;
}