console.log( solution(15) );

function solution(n) {
    let firstNum = 1;
    let count = 0;
    while(firstNum <= n) {
        let sum = 0;
        for(let i = firstNum; sum <= n; i++) {
            console.log(sum);
            sum += i;
            if(sum === n) {
                count++;
            }
        }
        firstNum++;
    }
    return count;
}