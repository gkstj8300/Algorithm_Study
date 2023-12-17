let result = solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
console.log(result);

function solution(sizes) {
    let backStr = '';
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            backStr = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = backStr;
        }
    }
    let x_maxNum = Math.max(...sizes.map(item => item[0]));
    let y_maxNum = Math.max(...sizes.map(item => item[1]));
    return x_maxNum * y_maxNum;
}