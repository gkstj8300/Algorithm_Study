let result = solution([1,2,3,4,5]); //[1,3,2,4,2]
console.log(result);

function solution(answers) {
    const meth_1 = [1, 2, 3, 4, 5];
    const meth_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const meth_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let arr = [0, 0, 0];
    for(let i = 0; i < answers.length; i++) {
        meth_1[i % meth_1.length] == answers[i] ? arr[0]++ : 0;
        meth_2[i % meth_2.length] == answers[i] ? arr[1]++ : 0;
        meth_3[i % meth_3.length] == answers[i] ? arr[2]++ : 0;
    }
    const maxNum = Math.max(...arr);
    let result = [];
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === maxNum) {
            result.push(j+1);
        }
    }
    return result;
}